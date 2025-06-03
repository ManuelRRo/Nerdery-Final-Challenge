import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class VariantTasksService {
  private readonly logger = new Logger(VariantTasksService.name);

  @Cron(CronExpression.EVERY_12_HOURS)
  handleCron() {
    this.logger.debug('Que ondas 5 seconds');
  }
}
