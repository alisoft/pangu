<template>
  <div :class="`${prefixedClassName}-detail`">
    <div :class="`${prefixedClassName}-main`">
      <div :class="`${prefixedClassName}-row`">
        <div v-if="hasContent" :class="`${prefixedClassName}-content`">
          <slot name="content" />
        </div>
        <div v-if="hasExtraContent" :class="`${prefixedClassName}-extraContent`">
          <slot name="extraContent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
  },
  setup(props, { slots }) {
    const hasContent = slots.content;
    const hasExtraContent = slots.extraContent;

    return {
      hasContent,
      hasExtraContent,
      prefixedClassName: props.prefixCls,
    };
  },
});
</script>
