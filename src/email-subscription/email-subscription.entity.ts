import { AggregateRoot } from '@nestjs/cqrs';
import { UniqueEntityId } from 'src/core/domain/UniqueEntityId';
import { EmailSubscribedEvent } from './events/email-subscribed.event';

interface EmailSubscriptionProps {
  corporatePartnerId: string;
  email: string;
  firstName: string;
  createdAt: Date;
}

export class EmailSubscription extends AggregateRoot {
  private constructor(
    public readonly props: EmailSubscriptionProps,
    private _id: UniqueEntityId,
  ) {
    super();
    this._id = _id ? _id : new UniqueEntityId();
    this.apply(new EmailSubscribedEvent(this.id));
  }

  get id(): string {
    return this._id.toString();
  }

  get email(): string {
    return this.props.email;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get corporatePartnerId(): string {
    return this.props.corporatePartnerId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  static create(
    props: EmailSubscriptionProps,
    id?: UniqueEntityId,
  ): EmailSubscription {
    return new EmailSubscription(props, id);
  }
}

export default EmailSubscription;
