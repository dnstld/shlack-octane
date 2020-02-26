import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  loginAsUserWithId(val) {
    console.log('UserId: ', val)
  }

  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    const { target } = evt;
    const val = target.querySelector('select').value;

    this.loginAsUserWithId(val);
  }
}
