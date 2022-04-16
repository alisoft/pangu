import type { VNodeChild } from 'vue';

export type MenuTheme = 'dark' | 'light';

export type LayoutType = 'mix' | 'side' | 'left' | 'top';

export type TargetType = '_blank' | '_self' | unknown;

export type ContentWidth = 'Fluid' | 'Fixed';

export interface MetaRecord {
  icon?: string | VNodeChild | JSX.Element;
  title?: string;
  authority?: string | string[];
  [key: string]: any;
}

export interface RouteProps {
  [x: string]: any;
  key?: string | symbol;
  path: string;
  name?: string | symbol;
  meta?: MetaRecord;
  target?: TargetType;
  children?: RouteProps[];
  redirect?: any;
}
