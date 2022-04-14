import type { GetterTree } from 'vuex';
import type { AppState } from './state';
import type { RootState } from '@/store/root-state';

export const getters: GetterTree<AppState, RootState> = {
  lang: state => state.lang,
  device: state => state.device,
  layout: state => state.layout,
  navTheme: state => state.navTheme,
  contentWidth: state => state.contentWidth,
  fixedHeader: state => state.fixedHeader,
  fixedSidebar: state => state.fixedSidebar,
  primaryColor: state => state.primaryColor,
  colorWeak: state => state.colorWeak,
  splitMenus: state => state.splitMenus,
  transitionName: state => state.transitionName,
  multiTab: state => state.multiTab,
  multiTabFixed: state => state.multiTabFixed,
};
