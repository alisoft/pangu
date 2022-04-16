<template>
  <div class="basic-list-header-info">
    <span>{{ title }}</span>
    <p>{{ value }}</p>
    <em v-if="!!bordered" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="less">
.basic-list-header-info {
  position: relative;
  text-align: center;
  & > span {
    display: inline-block;
    margin-bottom: 4px;
    color: @text-color-secondary;
    font-size: @font-size-base;
    line-height: 22px;
  }
  & > p {
    margin: 0;
    color: @heading-color;
    font-size: 24px;
    line-height: 32px;
  }
  & > em {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 56px;
    background-color: @border-color-split;
  }
}
</style>
