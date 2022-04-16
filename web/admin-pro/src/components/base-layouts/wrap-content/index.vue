<template>
  <a-layout-content :class="classNames">
    <slot />
  </a-layout-content>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue';
import { useProProvider } from '@/components/base-layouts/pro-provider';

export default defineComponent({
  name: 'WrapContent',
  setup() {
    const { getPrefixCls } = toRefs(useProProvider());
    const prefixCls = getPrefixCls.value('basicLayout');
    const classNames = ref({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-has-header`]: true,
    });
    return {
      classNames,
    };
  },
});
</script>
