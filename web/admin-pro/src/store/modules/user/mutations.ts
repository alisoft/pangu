import type { MutationTree } from 'vuex';
import type { UserState } from './typing';
import { initState } from './state';
import { STORAGE_TOKEN_KEY } from '@/store/mutation-type';
import ls from '@/utils/local-storage';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_AVATAR = 'SET_AVATAR';
export const SET_ROLE = 'SET_ROLE';
export const SET_INFO = 'SET_INFO';
export const SET_ROUTERS = 'SET_ROUTERS';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';

export const mutations: MutationTree<UserState> = {
  [SET_TOKEN]: (state, token: string) => {
    state.token = token;
    ls.set(STORAGE_TOKEN_KEY, token);
  },
  [SET_INFO]: (state, info) => {
    if (info.role) {
      state.role = info.role;
    }
    if (info.userid) {
      state.username = info.userid;
      state.nickname = info.userid;
    }
    if (info.name) {
      state.nickname = info.name;
    }
    if (info.avatar) {
      state.avatar = info.avatar;
    }
    state.extra = { ...info };
  },
  [SET_ROLE]: (state, role) => {
    state.role = role;
  },
  [SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar;
  },
  [SET_ROUTERS]: (state, allowRoutes) => {
    state.allowRouters = allowRoutes;
  },
  [RESET_CURRENT_USER]: state => {
    Object.assign(state, initState);
  },
};
