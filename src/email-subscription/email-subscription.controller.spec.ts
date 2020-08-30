import { Test, TestingModule } from '@nestjs/testing';
import { EmailSubscriptionController } from './email-subscription.controller';

describe('EmailSubscriptionController', () => {
  let controller: EmailSubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailSubscriptionController],
    }).compile();

    controller = module.get<EmailSubscriptionController>(EmailSubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
