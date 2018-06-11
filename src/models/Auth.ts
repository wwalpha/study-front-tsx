import { Record } from 'immutable';
import { Models } from 'typings';

export default class Auth extends Record<Models.AuthProps>({
  username: undefined,
}) {

  signIn(user: any) {
    console.log('sign:', user);
    return this.set('username', user);
  }
}
