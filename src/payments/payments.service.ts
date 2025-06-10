import { Injectable, RawBodyRequest } from '@nestjs/common';
import { AppService } from '../app.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import Stripe from 'stripe';
import { CartDetails, Payments, Prisma } from 'generated/prisma';
import { OrdersService } from '../orders/orders.service';
import { SignInData } from '../common/dtos/UserRole.dto';
import { CartService } from '../carts/carts.service';
import { CartsDetailsService } from '../carts-details/carts-details.service';

@Injectable()
export class PaymentsService {
  stripe;
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly orderService: OrdersService,
    private readonly cartService: CartService,
    private readonly cartDetailService: CartsDetailsService,
  ) {
    this.stripe = new Stripe(this.appService.configStripeSecret() as string, {
      typescript: true,
    });
  }

  async createPaymentIntent(userSign: SignInData): Promise<string | null> {
    const currency = 'usd';
    const cart = await this.cartService.getCartByUserID(userSign.userId);
    const cartDetails = await this.cartDetailService.getCartDetailByCartId(
      cart as string,
    );

    let order;
    const amount = this.calculateTotalAmountInCents(cartDetails);

    if (amount > 0) {
      order = await this.orderService.createOrder(userSign.userId, cartDetails);
    } else {
      throw new Error('amount shoud be greater than 0');
    }

    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      console.log('PATMENT INTENT', paymentIntent);
      const payment = await this.addPayment(
        order.id,
        paymentIntent.id,
        paymentIntent.status,
        amount,
        currency,
      );
      const jsonString = JSON.stringify(paymentIntent.client_secret);
      return jsonString;
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
      throw new Error('Failed to create PaymentIntent');
    }
  }

  async webhooksEvent(req: RawBodyRequest<Request>) {
    const signature = req.headers['stripe-signature'] as string;
    const payload = req.rawBody as Buffer;
    let event;
    try {
      event = await this.stripe.webhooks.constructEvent(
        payload,
        signature,
        this.appService.configWebhookSecret() as string,
      );
    } catch (err) {
      throw new Error(
        `⚠️  Webhook signature verification failed.`,
        err.message,
      );
    }
    console.log(event);
    switch (event.type) {
      case 'charge.succeeded': {
        const payment = event.data.object;
        console.log(`Payment for  was successful!`);
        await this.updateStatusByPaymentIntent(
          payment.payment_intent,
          payment.status,
        );
        break;
      }
      case 'charge.failed': {
        const payment = event.data.object;
        console.log(`Payment was not succesfull`);
        await this.updateStatusByPaymentIntent(
          payment.payment_intent,
          payment.status,
        );
        break;
      }
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  }

  async addPayment(
    orderId: string,
    paymentIntent_id: string,
    status: string,
    amount: number,
    currency: string,
  ): Promise<Payments> {
    const paymentInit: Prisma.PaymentsCreateInput = {
      status: status,
      amount,
      currency,
      receipt_url: 'url',
      payment_intent: paymentIntent_id,
      order: {
        connect: { id: orderId },
      },
    };

    const payment = await this.prisma.payments.create({ data: paymentInit });

    return payment;
  }

  async updateStatusByPaymentIntent(paymentIntent: string, status: string) {
    const data = {
      status,
    };

    return await this.prisma.payments.update({
      where: { payment_intent: paymentIntent },
      data: { status: data.status },
    });
  }

  calculateTotalAmountInCents(cartDetails: CartDetails[]) {
    const amount = cartDetails.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    return amount * 100;
  }
}
