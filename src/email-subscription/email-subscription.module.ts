import { Module } from '@nestjs/common';
import { EmailSubscriptionController } from './email-subscription.controller';
import { CqrsModule, EventPublisher } from '@nestjs/cqrs';
import { EmailSubscriptionRepository } from './repos/email-subscription.repo';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import {
  EmailSubscriptionModel,
  EmailSubscriptionSchema,
} from './infra/email-subscription.model';
import { EmailSubscriptionMap } from './mappers/email-subscription.mapper';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeatureAsync([
      {
        name: EmailSubscriptionModel.name,
        imports: [CqrsModule],
        useFactory: (publisher: EventPublisher): any => {
          const schema = EmailSubscriptionSchema;
          console.log(publisher);
          schema.post('save', doc => {
            const es = publisher.mergeObjectContext(
              EmailSubscriptionMap.toDomain(doc),
            );
            console.log(es);
            es.commit();
          });
          return schema;
        },
        inject: [EventPublisher],
      },
    ]),
  ],
  controllers: [EmailSubscriptionController],
  providers: [EmailSubscriptionRepository],
})
export class EmailSubscriptionModule {}
