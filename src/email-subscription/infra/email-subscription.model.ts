import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EmailSubscriptionModel extends Document {
  @Prop()
  id: string;

  @Prop()
  firstName: string;

  @Prop()
  email: string;

  @Prop()
  corporatePartnerId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const EmailSubscriptionSchema = SchemaFactory.createForClass(
  EmailSubscriptionModel,
);
