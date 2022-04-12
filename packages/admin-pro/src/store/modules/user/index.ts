import type { Module } from 'vuex';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import type { UserState } from './typing';
import type { RootState } from '@/store/root-state';

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
