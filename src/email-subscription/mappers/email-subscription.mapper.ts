import EmailSubscription from '../email-subscription.entity';
import { Mapper } from 'src/core/infra/Mapper';
import { UniqueEntityId } from 'src/core/domain/UniqueEntityId';

export class EmailSubscriptionMap extends Mapper<EmailSubscription> {
  public static toPersistance(emailSubscription: EmailSubscription): any {
    return {
      id: emailSubscription.id,
      firstName: emailSubscription.firstName,
      email: emailSubscription.email,
      corporatePartnerId: emailSubscription.corporatePartnerId,
      createdAt: emailSubscription.createdAt,
    };
  }

  public static toDomain(raw: any): EmailSubscription {
    /* TODO: convert into emailSubscritpionOrError add Result wrapper */
    const emailSubscription = EmailSubscription.create(
      {
        firstName: raw.firstName,
        email: raw.email,
        corporatePartnerId: raw.corporatePartnerId,
        createdAt: new Date(raw.createdAt),
      },
      new UniqueEntityId(raw.id),
    );

    return emailSubscription;
  }
}
