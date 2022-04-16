import type { Module, GetterTree } from 'vuex';
import type { PayType } from './typing';
import { fakeSubmitForm } from '@/api/form/step-form';
import type { RootState } from '@/store/root-state';

export interface FormState {
  payAccount: string | undefined;
  receiverAccount: { type: PayType; number: string | number | undefined };
  receiverName: string;
  amount: number | string;
  [key: string]: any;
}

export interface StepFormState {
  step: FormState;
}

const initState: StepFormState = {
  step: {
    payAccount: undefined,
    receiverAccount: {
      type: 'alipay',
      number: undefined,
    },
    receiverName: 'Sendya',
    amount: 500,
  },
};

export const getters: GetterTree<StepFormState, RootState> = {
  payAccount: state => state.step.payAccount,
  receiverAccount: state => state.step.receiverAccount,
  receiverName: state => state.step.receiverName,
  amount: state => state.step.amount,
  step: state => state.step,
};

export const stepForm: Module<StepFormState, RootState> = {
  namespaced: true,
  state: initState,
  getters,
  actions: {
    async submitStepForm({ commit }, payload: FormState): Promise<void> {
      await fakeSubmitForm(payload);
      commit('saveStepFormData', { payload });
    },
    async saveStepFormData({ commit }, payload: FormState): Promise<void> {
      commit('saveStepFormData', { payload });
    },
    async clear({ commit }): Promise<void> {
      commit('saveStepFormData', initState.step);
    },
  },
  mutations: {
    saveStepFormData(state, { payload }) {
      state.step = {
        ...state.step,
        ...payload,
      };
    },
  },
};
