import type { Module } from 'vuex';
import type { AppState } from './state';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import type { RootState } from '@/store/root-state';

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
