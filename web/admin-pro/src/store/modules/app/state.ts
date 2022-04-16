import type { PureSettings } from '@/components/base-layouts/defaultSettings';

export interface AppState extends PureSettings {
  lang: string;
  device: 'mobile' | 'desktop' | string;
  transitionName: string;
  multiTab: boolean;
  multiTabFixed: boolean;
}

export const state: AppState = {
  lang: 'en-US',
  device: 'desktop',
  layout: 'side',
  navTheme: 'dark',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixedSidebar: true,
  menu: { locale: false },
  splitMenus: false,
  title: 'Admin Pro',
  primaryColor: '#1890ff',
  colorWeak: false,
  transitionName: '',
  multiTab: true,
  multiTabFixed: false,
};
