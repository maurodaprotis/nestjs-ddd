import { EmailSubscription } from '../email-subscription.entity';
import { InjectModel } from '@nestjs/mongoose';
import { EmailSubscriptionModel } from '../infra/email-subscription.model';
import { EmailSubscriptionMap } from '../mappers/email-subscription.mapper';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

export interface IEmailSubscription {
  save(emailSubscription: EmailSubscription): Promise<void>;
}

@Injectable()
export class EmailSubscriptionRepository implements IEmailSubscription {
  constructor(
    @InjectModel(EmailSubscriptionModel.name)
    private readonly emailSubscriptionModel: Model<EmailSubscriptionModel>,
  ) {}

  async save(emailSubscription: EmailSubscription): Promise<void> {
    const rawEmailSubscription = EmailSubscriptionMap.toPersistance(
      emailSubscription,
    );

    await this.emailSubscriptionModel.create(rawEmailSubscription);
  }
}
