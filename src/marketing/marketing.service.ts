import { Injectable, Logger } from '@nestjs/common';

const wait = ms => new Promise(res => setTimeout(res, ms));

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);

  async sendEvent(payload: any): Promise<void> {
    console.log('sending event!!!!!!!');
    await wait(2000);
    this.logger.log(payload);
  }
}
