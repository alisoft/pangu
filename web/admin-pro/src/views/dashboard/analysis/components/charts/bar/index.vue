<template>
  <div class="chart">
    <div>
      <h4 v-if="$slots.title" style="margin-bottom: 20px">
        <slot name="title" />
      </h4>
      <h4 v-else-if="title" style="margin-bottom: 20px">
        {{ title }}
      </h4>
      <chart :option="chartOption" :style="{ height: chartHeight }" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
import { Chart } from '@/components';

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const chartOption = ref({
      color: ['#3aa1ff'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        top: 10,
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      series: {
        type: 'bar',
        barWidth: '50%',
        data: [],
      },
    });

    const chartHeight = computed(() => `${props.height}px`);

    const setChartOption = data => {
      const xAxis = [];
      const seriesData = [];
      data.forEach(item => {
        const { x, y } = item;
        xAxis.push(x);
        seriesData.push(y);
      });
      chartOption.value.xAxis.data = xAxis;
      chartOption.value.series.data = seriesData;
    };

    watch(
      () => props.data,
      () => {
        setChartOption(props.data);
      },
    );

    onMounted(() => {
      setChartOption(props.data);
    });

    return {
      chartOption,
      chartHeight,
      setChartOption,
    };
  },
  components: {
    Chart,
  },
});
</script>

<style scoped></style>
