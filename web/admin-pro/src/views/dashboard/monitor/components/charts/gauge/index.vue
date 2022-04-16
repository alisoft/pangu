<template>
  <div :style="{ height: `${height}px` }">
    <chart :option="chartOption" :style="{ height: chartHeight }" />
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import { Chart } from '@/components';
import '../index.less';

export default defineComponent({
  name: 'Gauge',
  props: {
    height: {
      type: Number,
      default: 0,
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const chartHeight = computed(() => `${props.height}px`);
    const chartOption = ref({
      backgroundColor: 'rgba(0,0,0,0)',
      grid: {
        left: '-15%',
        top: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      series: [
        {
          name: '仪表盘',
          type: 'gauge',
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              color: [
                [props.percent / 100, '#1890ff'],
                [1, '#f7f9fc'],
              ],
              width: 10,
            },
          },
          axisLabel: {
            show: true,
            fontSize: 10,
            formatter(val: number) {
              switch (val) {
                case 20:
                  return '差';
                case 40:
                  return '中';
                case 60:
                  return '良';
                case 80:
                  return '优';
                default:
                  return '';
              }
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 14,
            lineStyle: {
              color: '#1890ff',
            },
          },
          detail: {
            formatter: function (value: number) {
              if (value != 0) {
                const num = Math.round(value * 10) / 10;
                return parseFloat(num + '').toFixed(1) + '%';
              } else {
                return 0;
              }
            },
            offsetCenter: [0, '70%'],
            textStyle: {
              fontSize: 20,
              color: '#666',
            },
          },
          data: [
            {
              name: '',
              value: props.percent,
            },
          ],
          pointer: {
            show: true,
            length: '65%',
            width: 8,
          },
        },
        {
          name: '小圆形',
          type: 'pie',
          radius: ['4%', '6%'],
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 0,
              name: '1',
            },
            {
              value: 100,
              name: '2',
              itemStyle: {
                normal: {
                  color: '#1890ff',
                },
              },
            },
          ],
        },
        {
          name: '小圆形',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['0%', '4%'],
          z: 10,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 0,
              name: '1',
              itemStyle: {
                normal: {
                  color: 'red',
                },
              },
            },
            {
              value: 100,
              name: '2',
              itemStyle: {
                color: '#fff',
              },
            },
          ],
        },
      ],
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

<style scoped></style>
