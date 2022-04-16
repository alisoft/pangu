<template>
  <div style="margin-bottom: 24px">
    <h3 :class="prefixCls">{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProProvider } from '../base-layouts/pro-provider';

export default defineComponent({
  name: 'BodyWrapper',
  props: {
    title: { type: String, default: '' },
  },
  setup() {
    const { getPrefixCls } = useProProvider();
    const prefixCls = getPrefixCls('setting-drawer-title');

    return {
      prefixCls,
    };
  },
});
</script>
