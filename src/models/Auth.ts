import { Record } from 'immutable';
import { Models } from 'src';

export default class Auth extends Record<Models.AuthProps>({
  isLoggedIn: false,
}) {

  signIn(user: any) {
    console.log('sign:', user);
    return this
      .set('username', user)
      .set('isLoggedIn', true);
  }
}
