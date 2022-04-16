import type { ContentWidth, LayoutType, MenuTheme } from './typing';

export interface ProSettings {
  footerRender?: boolean;
  headerRender?: boolean;
}

export interface PureSettings {
  /**
   * theme for nav menu
   */
  navTheme: MenuTheme | 'realDark' | undefined;
  /**
   * nav menu position: `side` or `top`
   */
  headerHeight?: number;
  /**
   * customize header height
   */
  layout: LayoutType;
  /**
   * layout of content: `Fluid` or `Fixed`, only works when layout is top
   */
  contentWidth: ContentWidth;
  /**
   * sticky header
   */
  fixedHeader: boolean;
  /**
   * sticky sidebar
   */
  fixedSidebar: boolean;
  menu: { locale?: boolean; defaultOpenAll?: boolean };
  title: string;
  primaryColor: string;
  colorWeak?: boolean;
  splitMenus?: boolean;
}
