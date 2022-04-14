<template>
  <div
    :class="{
      [prefixedCls]: true,
      wide: wide,
    }"
  >
    <div :class="childClassNames">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, toRefs } from 'vue';
import { useProProvider } from '@/components/base-layouts/pro-provider';

export default defineComponent({
  name: 'GridContent',
  props: {
    contentWidth: {
      type: String,
      default: () => undefined,
    },
    prefixCls: {
      type: String,
      default: () => undefined,
    },
  },
  setup(props) {
    const { getPrefixCls, contentWidth } = toRefs(useProProvider());
    const prefixedCls = props.prefixCls || getPrefixCls.value('grid-content');
    const wide = computed(() => (props.contentWidth || contentWidth?.value) === 'Fixed');
    // console.log('contentWidth', contentWidth, props.contentWidth);
    // const classNames = ref({
    //   [prefixCls]: true,
    //   [`wide`]: wide.value,
    // });
    const childClassNames = ref(`${prefixedCls}-children`);

    return {
      prefixedCls,
      wide,
      childClassNames,
    };
  },
});
</script>

<style lang="less">
@import url('./index.less');
</style>
