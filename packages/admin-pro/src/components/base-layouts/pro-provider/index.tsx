import { withInstall } from '@/utils/withInstall';
import type { RenderFunction, App, PropType, SetupContext, InjectionKey } from 'vue';
import { reactive, readonly, provide, inject, toRefs, defineComponent } from 'vue';
import type { ContentWidth } from '../typing';

const defaultPrefixCls = 'ant-pro';

export interface ProProviderProps {
  prefixCls: string;
  contentWidth: ContentWidth;
}

export interface ProProviderData {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  contentWidth: ContentWidth;
}

export const defaultProProviderProps: ProProviderData = {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `${defaultPrefixCls}-${suffixCls}`;
  },
  contentWidth: 'Fluid',
};

export const injectProConfigKey: InjectionKey<ProProviderData> = Symbol();

const ProProvider = defineComponent({
  name: 'ProProvider',
  props: {
    prefixCls: {
      type: String as PropType<string>,
      default: 'ant-pro',
    },
    contentWidth: {
      type: String as PropType<ContentWidth>,
      default: 'Fluid',
    },
  },
  setup(props, { slots }: SetupContext): RenderFunction | void {
    const { contentWidth } = toRefs(props);
    const getPrefixCls = (suffixCls = '', customizePrefixCls?: string) => {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? `${props.prefixCls}-${suffixCls}` : props.prefixCls;
    };

    const proConfigProvider = reactive({
      contentWidth,
      getPrefixCls,
    });

    provide(injectProConfigKey, readonly(proConfigProvider));

    return () => slots.default?.();
  },
  install(app: App): void {
    app.component(ProProvider.name, ProProvider);
  },
});

export const useProProvider = () => {
  return inject(injectProConfigKey, defaultProProviderProps);
};

export default withInstall(ProProvider);
