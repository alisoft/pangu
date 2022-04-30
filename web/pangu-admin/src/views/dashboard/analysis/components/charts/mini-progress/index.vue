<template>
  <div class="miniProgress">
    <a-tooltip :title="targetLabel">
      <div class="target" :style="{ left: target ? `${target}%` : undefined }">
        <span :style="{ backgroundColor: color || undefined }" />
        <span :style="{ backgroundColor: color || undefined }" />
      </div>
    </a-tooltip>
    <div class="progressWrap">
      <div
        class="progress"
        :style="{
          backgroundColor: color || undefined,
          width: percent ? `${percent}%` : undefined,
          height: (strokeWidth && `${strokeWidth}px`) || undefined,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    target: {
      type: [Number, String],
      default: () => undefined,
    },
    targetLabel: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'rgb(19, 194, 194)',
    },
    strokeWidth: {
      type: Number,
      default: 0,
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
