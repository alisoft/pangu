<template>
  <water-mark content="Admin Pro" :disabled="false">
    <left-menu-layout key="leftmenu-layout" v-if="layout === 'left'">
      <slot />
    </left-menu-layout>
    <basic-layout key="basic-layout" v-else><slot /></basic-layout>
  </water-mark>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicLayout from './basic-layout.vue';
import LeftMenuLayout from './leftmenu-layout.vue';
import { injectMenuState } from './use-menu-state';
import { default as WaterMark } from '@/components/watermark/index.vue';

export default defineComponent({
  name: 'GlobalLayout',
  setup() {
    return {
      ...injectMenuState(),
    };
  },
  components: {
    BasicLayout,
    LeftMenuLayout,
    WaterMark,
  },
});
</script>
