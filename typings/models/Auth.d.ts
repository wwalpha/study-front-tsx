import { Record } from 'immutable';

export interface AuthProps {
  isLoggedIn: boolean,
  username?: string,
}

export interface Auth extends AuthProps, Record<AuthProps> {
  get<K extends keyof AuthProps>(key: K): AuthProps[K];
}
