<template>
  <div :class="className" :title="typeof $slots.default === 'string' ? $slots.default : ''">
    <span><slot /></span>
    <span v-if="flag" :class="flag">
      <caret-up-outlined v-if="flag === 'up'" />
      <caret-down-outlined v-else />
    </span>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Trend',
  props: {
    colorful: {
      type: Boolean as PropType<boolean>,
      default: () => true,
    },
    flag: {
      type: String as PropType<'up' | 'down'>,
      required: true,
      validator: function (value: string) {
        // 这个值必须匹配下列字符串中的一个S
        return ['up', 'down'].indexOf(value) !== -1;
      },
    },
    reverseColor: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
  },
  setup() {
    const className = {
      trendItem: true,
      trendItemGrey: false, // !props.colorful,
      reverseColor: false,
    };

    return {
      className,
    };
  },
  components: {
    CaretUpOutlined,
    CaretDownOutlined,
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
