import { Models } from 'typings';
import { Record } from 'immutable';

export default class Auth extends Record<Models.AuthProps>({
  user: undefined,
}) {

  signIn(user: any) {
    console.log('sign:', user);
    return this.set('user', user);
  }
}
