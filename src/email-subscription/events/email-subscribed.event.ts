export class EmailSubscribedEvent {
  constructor(public readonly emailSubscriptionId: string) {
    console.log('EmailSubscribedEvent created: ', emailSubscriptionId);
  }
}
