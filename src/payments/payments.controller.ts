import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  RawBodyRequest,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Response } from 'express';
import { AppService } from 'src/app.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SignInData } from 'src/common/dtos/UserRole.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('payments')
@UseFilters(HttpExceptionFilter)
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly appService: AppService,
  ) {}
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('intents')
  async createPaymentIntent(
    @CurrentUser() id: SignInData,
  ): Promise<string | null> {
    return this.paymentsService.createPaymentIntent(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('webhooks')
  async events(@Req() req: RawBodyRequest<Request>, @Res() res: Response) {
    await this.paymentsService.webhooksEvent(req);
    res.sendStatus(200);
  }
}
