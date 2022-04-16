<template>
  <a-card :loading="loading" :bordered="bordered" :body-style="{ padding: '20px 24px 8px 24px' }">
    <div class="chartCard">
      <div :class="['chartTop', { chartTopMargin: !$slots.default && !$slots.footer }]">
        <div class="avatar">
          <slot name="avatar" />
        </div>
        <div class="metaWrap">
          <div class="meta">
            <span v-if="title" class="title">
              {{ title }}
            </span>
            <span v-else>
              <slot name="title" />
            </span>
            <span class="action">
              <slot name="action" />
            </span>
          </div>
          <div v-if="total" class="total">{{ total }}</div>
          <div v-else-if="$slots.total" class="total">
            <slot name="total" />
          </div>
        </div>
      </div>
      <div
        v-if="$slots.default"
        class="content"
        :style="{ height: contentHeight ? `${contentHeight}px` : 'auto' }"
      >
        <div :class="contentHeight ? 'contentFixed' : ''">
          <slot />
        </div>
      </div>
      <div v-if="$slots.footer" :class="['footer', { footerMargin: !!$slots.default }]">
        <slot name="footer" />
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    total: {
      type: [Number, String],
      default: () => undefined,
    },
    contentHeight: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => undefined,
    },
    bordered: {
      type: Boolean,
      default: () => false,
    },
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
