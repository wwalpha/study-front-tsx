import { Models } from 'typings';
import { Record } from 'immutable';

class User extends Record<Models.UserProps>({
  username: undefined,
}) {

}

export default User;
