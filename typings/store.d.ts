import { Auth } from './models/Auth';
import { Map, Record } from 'immutable';

interface State {
  auth: Auth
}

export interface IState extends Map<keyof State, Record<any>> {
  get<K extends keyof State>(key: K): State[K];
}
