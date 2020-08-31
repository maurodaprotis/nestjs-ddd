import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailSubscriptionModule } from './email-subscription/email-subscription.module';
import { MarketingModule } from './marketing/marketing.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-ddd'),
    CqrsModule,
    MarketingModule,
    EmailSubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
