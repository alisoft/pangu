import type { ActionTree } from 'vuex';
import type { AppState } from './state';
import { SET_LANG } from './mutations';
import { loadLanguageAsync } from '@/locales';
import { localStorage } from '@/utils/local-storage';
import { STORAGE_LANG_KEY } from '@/store/mutation-type';
import type { RootState } from '@/store/root-state';

export const actions: ActionTree<AppState, RootState> = {
  [SET_LANG]({ commit }, lang: string) {
    return new Promise<void>((resolve, reject) => {
      loadLanguageAsync(lang)
        .then(() => {
          commit(SET_LANG, lang);
          localStorage.set(STORAGE_LANG_KEY, lang);
          resolve();
        })
        .catch((e: Error) => {
          reject(e);
        });
    });
  },
};
