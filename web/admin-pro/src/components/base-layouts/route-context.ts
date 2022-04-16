import type { PropType, SetupContext, InjectionKey, ComputedRef } from 'vue';
import { defineComponent, provide, inject, computed } from 'vue';
import type { RouteProps } from './typing';
import type { PureSettings } from './defaultSettings';

export interface RouteContextType extends Partial<PureSettings> {
  breadcrumb?: any;
  menuData?: any[];
  isMobile?: boolean;
  prefixCls?: string;
  collapsed?: boolean;
  hasSiderMenu?: boolean;
  hasHeader?: boolean;
  siderWidth?: number;
  hasFooterToolbar?: boolean;
  hasFooter?: boolean;
  setHasFooterToolbar?: (bool: boolean) => void;
}

export const routeContextProps = {
  isMobile: {
    type: Boolean,
    default: false,
  },
  menuData: {
    type: Object as PropType<RouteProps[]>,
    default: undefined,
  },
  prefixCls: {
    type: String,
    default: 'ant-pro',
  },
  collapsed: {
    type: Boolean,
  },
  hasSiderMenu: {
    type: Boolean,
  },
  siderWidth: {
    type: Number,
  },
  hasFooterToolbar: {
    type: Boolean,
  },
  hasFooter: {
    type: Boolean,
  },
  setHasFooterToolbar: {
    type: Function as PropType<(bool: boolean) => void>,
  },
};

export const defaultRouteContext: RouteContextType = {};

export const contextKey: InjectionKey<ComputedRef<RouteContextType>> = Symbol();

export const useContext = () => {
  return inject(
    contextKey,
    computed(() => defaultRouteContext),
  );
};

export const RouteContextProvider = defineComponent({
  name: 'RouteContextProvider',
  props: {
    value: {
      type: Object as PropType<RouteContextType>,
      required: true,
    },
  },
  setup(props, { slots }: SetupContext) {
    // const routeContext = reactive({
    //   ...toRefs(props.value),
    // });
    provide(
      contextKey,
      computed(() => props.value),
    );

    return () => slots.default?.();
  },
});
