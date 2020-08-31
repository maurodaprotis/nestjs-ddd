import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { EmailSubscribedEvent } from 'src/email-subscription/events/email-subscribed.event';
import { MarketingService } from '../marketing.service';

@EventsHandler(EmailSubscribedEvent)
export class EmailSubscribedHandler
  implements IEventHandler<EmailSubscribedEvent> {
  constructor(private readonly marketingService: MarketingService) {}

  async handle(event: EmailSubscribedEvent): Promise<void> {
    console.log('[Marketing Module] email subscription handled!');
    await this.marketingService.sendEvent(event.emailSubscriptionId);
  }
}
