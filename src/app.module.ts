import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailSubscriptionModule } from './email-subscription/email-subscription.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestjs-ddd'), EmailSubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
