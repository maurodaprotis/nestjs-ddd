import { Entity } from 'src/core/domain/Entity';
import { UniqueEntityId } from 'src/core/domain/UniqueEntityId';

interface EmailSubscriptionProps {
  corporatePartnerId: string;
  email: string;
  firstName: string;
  createdAt: Date;
}

export class EmailSubscription extends Entity<EmailSubscriptionProps> {
  get id(): UniqueEntityId {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get corporatePartnerId(): string {
    return this.props.corporatePartnerId;
  }

  private constructor(props: ) {
    super(props, )
  }

  static create(): EmailSubscription {
    return new EmailSubscription();
  }
}

export default EmailSubscription;
