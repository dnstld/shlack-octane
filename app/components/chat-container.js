import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ChatContainerComponent extends Component {
  @service auth;

  @tracked
  messages = [];

  @action
  async loadMessages() {
    const {
      channel: { id, teamId },
    } = this.args;

    const resp = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);
    this.messages = await resp.json();
  }

  @action
  async createMessage(body) {
    const userId = this.auth.currentUserId;

    const {
      channel: { id: channelId, teamId },
    } = this.args;

    const resp = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        teamId,
        channelId,
        userId,
        body
      })
    });
  }
}
