import { Controller, Get, Post, Body } from '@nestjs/common';
import EmailSubscription from './email-subscription.entity';
import { EventBus, EventPublisher } from '@nestjs/cqrs';
import { EmailSubscribedEvent } from './events/email-subscribed.event';
import { EmailSubscriptionRepository } from './repos/email-subscription.repo';

@Controller('email-subscription')
export class EmailSubscriptionController {
  constructor(
    private readonly eventBus: EventBus,
    private publisher: EventPublisher,
    private readonly emailSubscriptionRepository: EmailSubscriptionRepository,
  ) {}
  @Get()
  async getOne(): Promise<EmailSubscription> {
    const es = EmailSubscription.create({
      email: 'john@doe.com',
      corporatePartnerId: '1234',
      firstName: 'John',
      createdAt: new Date(),
    });

    const emailSubscription = this.publisher.mergeObjectContext(es);
    emailSubscription.commit();

    return emailSubscription;
  }

  @Get('one')
  getOther(): EmailSubscription {
    const emailSub = EmailSubscription.create({
      email: 'john@doe.com',
      corporatePartnerId: '123',
      firstName: 'John',
      createdAt: new Date(),
    });

    this.eventBus.publish(new EmailSubscribedEvent('123'));
    return emailSub;
  }

  @Post()
  async create(
    @Body()
    emailSubDto: {
      email: string;
      corporatePartnerId: string;
      firstName: string;
    },
  ): Promise<{ id: string }> {
    const { email, corporatePartnerId, firstName } = emailSubDto;
    const emailSub = EmailSubscription.create({
      email,
      corporatePartnerId,
      firstName,
      createdAt: new Date(),
    });

    await this.emailSubscriptionRepository.save(emailSub);

    return emailSub;
  }
}
