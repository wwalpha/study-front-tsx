import { Record, List } from 'immutable';
import User from './User';

const AppRecord = Record({
  users: List(),
  currUser: '',
});

export default class App extends AppRecord {
  setUsers(users) {
    const array = users.map(item => new User(item));

    return this.set('users', List(array));
  }

  setUserProps(userId) {
    return this
      .set('currUser', userId);
  }
}
