<template>
  <div class="setting-list">
    <slot name="label">
      <h3>{{ label }}</h3>
    </slot>
    <div class="setting-list-items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'List',
  props: {
    label: {
      type: String,
      default: () => undefined,
    },
  },
});
</script>

<style lang="less" scoped>
.setting-list {
  margin-top: 16px;
  //border-bottom: 1px dashed #ebedf0;
}
</style>
