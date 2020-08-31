import { Module } from '@nestjs/common';
import { MarketingService } from './marketing.service';
import { CqrsModule } from '@nestjs/cqrs';
import { EmailSubscribedHandler } from './subscribers/email-subscribed.handler';

export const EventHandlers = [EmailSubscribedHandler];

@Module({
  imports: [CqrsModule],
  providers: [MarketingService, ...EventHandlers],
  exports: [...EventHandlers],
})
export class MarketingModule {}
