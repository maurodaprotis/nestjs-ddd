import { Module } from '@nestjs/common';
import { EmailSubscriptionController } from './email-subscription.controller';

@Module({
  controllers: [EmailSubscriptionController]
})
export class EmailSubscriptionModule {}
