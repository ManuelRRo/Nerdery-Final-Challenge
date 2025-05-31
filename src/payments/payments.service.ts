import { Injectable, RawBodyRequest } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import Stripe from 'stripe';
import { PaymentInput } from './inputs/payments.input';
import { Payments, Prisma } from 'generated/prisma';
import { OrdersService } from '../orders/orders.service';
import { SignInData } from 'src/common/dtos/UserRole.dto';

@Injectable()
export class PaymentsService {
  stripe;
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly orderService: OrdersService,
  ) {
    this.stripe = new Stripe(this.appService.configStripeSecret() as string, {
      typescript: true,
    });
  }

  async createPaymentIntent(
    input: PaymentInput,
    userSign: SignInData,
  ): Promise<string | null> {
    const { amount, currency } = input;

    console.log('iduser', userSign);
    const order = await this.orderService.createOrder(userSign.userId);

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
        input,
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

    // try {
    const event = await this.stripe.webhooks.constructEvent(
      payload,
      signature,
      this.appService.configWebhookSecret() as string,
    );
    // } catch (err) {
    //   throw new Error(
    //     `⚠️  Webhook signature verification failed.`,
    //     err.message,
    //   );
    // }
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
    input: PaymentInput,
  ): Promise<Payments> {
    const paymentInit: Prisma.PaymentsCreateInput = {
      status: status,
      amount: input.amount,
      currency: input.currency,
      receipt_url: 'url',
      payment_intent: paymentIntent_id,
      order: {
        connect: { id: orderId },
      },
    };

    return await this.prisma.payments.create({ data: paymentInit });
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
}
