import { Record } from 'immutable';
import { Models } from 'typings';

export default class App extends Record<Models.AppProps>({
  isLoggedIn: false
}) {

}
