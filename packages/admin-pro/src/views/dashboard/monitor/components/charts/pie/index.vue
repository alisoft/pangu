<template>
  <div class="pie" :style="{ height: chartHeight }">
    <div class="chart">
      <chart :option="chartOption" :style="{ height: chartHeight }" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Chart } from '@/components';

export default defineComponent({
  name: 'Pie',
  props: {
    height: {
      type: Number,
      default: 0,
    },
    percent: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#58afff',
    },
    title: {
      type: String,
      default: '',
    },
    total: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const chartHeight = computed(() => `${props.height}px`);
    const chartOption = computed(() => {
      return {
        title: {
          top: 'middle',
          left: 'center',
          text: props.total,
          textStyle: {
            fontSize: 13,
            lineHeight: 20,
            color: '#9b9b9b',
          },
        },
        color: [props.color, '#f4f6f8'],
        series: [
          {
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: props.percent,
              },
              {
                value: 100 - props.percent,
              },
            ],
          },
        ],
      };
    });

    return {
      chartHeight,
      chartOption,
    };
  },
  components: {
    Chart,
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
