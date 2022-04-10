<template>
  <div :class="baseClassName" :style="{ width }">
    <div :class="`${baseClassName}-left`">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div :class="`${baseClassName}-right`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType, VNodeChild } from 'vue';
import { defineComponent, computed, inject, ref } from 'vue';
import { useProProvider } from '@/components/base-layouts/pro-provider';
import { injectMenuState } from '@/layouts/use-menu-state';

export interface FooterToolbarProps {
  extra?: VNodeChild;
  renderContent?: (props: FooterToolbarProps & { leftWidth?: string }) => VNodeChild;
  prefixCls?: string;
}

export default defineComponent({
  name: 'FooterToolBar',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
    extra: {
      type: [String, Object] as PropType<string | VNodeChild>,
      default: '',
    },
  },
  setup() {
    const { getPrefixCls } = useProProvider();
    const { sideWidth, secondSideWidth, layout } = injectMenuState();
    const isMobile = inject('isMobile', ref(false));

    const baseClassName = getPrefixCls('footer-bar');

    const width = computed(() => {
      if (isMobile.value || !sideWidth.value) {
        return '100%';
      }
      const w = layout.value === 'left' ? sideWidth.value + secondSideWidth.value : sideWidth.value;
      return `calc(100% - ${w}px)`;
    });

    return {
      baseClassName,
      width,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
