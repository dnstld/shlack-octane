import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class MocjAuThService extends Service {
  @service router;

  currentUserId = null;

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }
}
