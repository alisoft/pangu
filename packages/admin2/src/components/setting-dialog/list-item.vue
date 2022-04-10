<template>
  <a-row :gutter="16" align="middle" style="height: 48px">
    <a-col :span="10" class="label colon">
      <slot name="label">
        {{ label }}
      </slot>
    </a-col>
    <a-col :span="14">
      <slot />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    label: {
      type: String,
      default: () => undefined,
    },
  },
});
</script>

<style lang="less" scoped>
.label {
  text-align: right;
  &.colon {
    &::after {
      position: relative;
      top: -0.5px;
      margin: 0 8px 0 2px;
      content: ':';
    }
  }
}
</style>
