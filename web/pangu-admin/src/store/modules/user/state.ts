import type { UserState } from './typing';

export const state: UserState = {
  token: '',
  username: '',
  nickname: '',
  avatar: '',
  extra: {},
  role: undefined,
  allowRouters: [],
};

export const initState: UserState = Object.assign({}, state);
