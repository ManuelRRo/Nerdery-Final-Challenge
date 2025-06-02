import { Injectable, Logger } from '@nestjs/common';

import { Cron, CronExpression } from '@nestjs/schedule';
import { getEmailBody } from 'src/common/emailTemplate/email.template';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { SendEmailDto } from 'src/email/dtos/sendEmail.dto';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class ProductTasksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}
  private readonly logger = new Logger(ProductTasksService.name);

  @Cron(CronExpression.EVERY_12_HOURS)
  async sendProductEmailWithStockThree() {
    const lowStockProducts = await this.prisma.variants.findMany({
      where: {
        stock: {
          lte: 3,
        },
      },
      select: {
        product: {
          select: {
            name: true,
          },
        },
        product_id: true,
        file: {
          select: {
            file_url: true,
          },
        },
      },
      distinct: ['product_id'],
    });
    console.log(lowStockProducts);
    const lowStockProductIds = lowStockProducts.map((p) => p.product_id);

    // Then find the last user who liked these products but hasn't ordered
    const lastInterestedUser = await this.prisma.likes.findFirst({
      where: {
        productId: {
          in: lowStockProductIds,
        },
        user: {
          // User has no orders containing these products
          orders: {
            none: {
              orderDetails: {
                some: {
                  variants: {
                    product_id: {
                      in: lowStockProductIds,
                    },
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc', // Get most recent like first
      },
      select: {
        user: {
          select: {
            email: true,
            id: true,
          },
        },
        createdAt: true,
        products: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    this.logger.debug(
      'Called when the current second is 45',
      lastInterestedUser,
    );
    const emailDto: SendEmailDto = {
      recipient: lastInterestedUser?.user.email as string,
      body: getEmailBody(
        lastInterestedUser?.products.name,
        lowStockProducts[0].file?.file_url,
      ),
    };
    await this.emailService.sendTestEmail(emailDto);
  }
}
