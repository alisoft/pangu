import type { MutationTree } from 'vuex';
import type { AppState } from './state';
import type { ContentWidth, LayoutType, MenuTheme } from '@/components/base-layouts/typing';

export const SET_LANG = 'SET_LANG';
export const SET_DEVICE = 'SET_DEVICE';
export const SET_LAYOUT = 'SET_LAYOUT';
export const SET_NAV_THEME = 'SET_NAV_THEME';
export const SET_CONTENT_WIDTH = 'SET_CONTENT_WIDTH';
export const SET_FIXED_HEADER = 'SET_FIXED_HEADER';
export const SET_FIXED_SIDEBAR = 'SET_FIXED_SIDEBAR';
export const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
export const SET_COLOR_WEAK = 'SET_COLOR_WEAK';
export const SET_SPLIT_MENUS = 'SET_SPLIT_MENUS';
export const SET_TRANSITION_NAME = 'SET_TRANSITION_NAME';
export const SET_MULTI_TAB = 'SET_MULTI_TAB';
export const SET_FIXED_MULTI_TAB = 'SET_FIXED_MULTI_TAB';

export const mutations: MutationTree<AppState> = {
  [SET_LANG](state: AppState, lang: string): void {
    state.lang = lang;
  },
  [SET_DEVICE](state: AppState, device: string): void {
    state.device = device;
  },
  [SET_LAYOUT](state: AppState, layout: LayoutType): void {
    state.layout = layout;
  },
  [SET_NAV_THEME](state: AppState, navTheme: MenuTheme | 'realDark' | undefined): void {
    state.navTheme = navTheme;
  },
  [SET_CONTENT_WIDTH](state: AppState, contentWidth: ContentWidth): void {
    state.contentWidth = contentWidth;
  },
  [SET_FIXED_HEADER](state: AppState, fixedHeader: boolean): void {
    state.fixedHeader = fixedHeader;
  },
  [SET_FIXED_SIDEBAR](state: AppState, fixedSidebar: boolean): void {
    state.fixedSidebar = fixedSidebar;
  },
  [SET_PRIMARY_COLOR](state: AppState, color: string): void {
    state.primaryColor = color;
  },
  [SET_COLOR_WEAK](state: AppState, colorWeak: boolean): void {
    state.colorWeak = colorWeak;
  },
  [SET_SPLIT_MENUS](state: AppState, split: boolean): void {
    state.splitMenus = split;
  },
  [SET_TRANSITION_NAME](state: AppState, name: string) {
    state.transitionName = name;
  },
  [SET_MULTI_TAB](state: AppState, isOpen: boolean) {
    state.multiTab = isOpen;
  },
  [SET_FIXED_MULTI_TAB](state: AppState, fixed: boolean) {
    state.multiTabFixed = fixed;
  },
};
