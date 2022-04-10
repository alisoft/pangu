<template>
  <span>{{ formatYuan(value) }}</span>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import numeral from 'numeral';

export default defineComponent({
  name: 'Yuan',
  props: {
    value: {
      type: [Number, String] as PropType<string | number>,
      required: true,
    },
  },
  setup() {
    const formatYuan = (val: string | number) => `¥ ${numeral(val).format('0,0')}`;
    return {
      formatYuan,
    };
  },
});
</script>

<style scoped></style>
