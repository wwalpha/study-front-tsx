import { Record } from 'immutable';

const UserRecord = Record({
  userId: null,
  dayLimit: 0,
  pageOffset: 0,
});

class User extends UserRecord {
  setUserId(name) {
    return this.set('userId', name);
  }

  setUserProps(props) {
    return this
      .set('dayLimit', props.dayLimit)
      .set('pageOffset', props.pageOffset)
      .set('type', props.type);
  }
}

export default User;
