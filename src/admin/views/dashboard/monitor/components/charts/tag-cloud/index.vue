<template>
  <div class="tagCloud" :style="{ width: '100%', height: `${height}px` }">
    <div ref="chartDom" :style="{ height: `${height}px` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, onMounted, onUnmounted } from "vue";
import { addListener, removeListener } from "resize-detector";
import type { ECharts } from "echarts";
import echarts from "echarts";
import { debounce } from "lodash-es";
import "echarts-wordcloud";

export default defineComponent({
  name: "TagCloud",
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const chartDom = ref<HTMLDivElement | null>(null);
    let chart: ECharts | null = null;

    const renderChart = (option: any) => {
      if (chartDom.value) {
        chart = echarts.init(chartDom.value);
        chart.setOption(option);
      }
    };

    const resizeChart = () => {
      chart?.resize();
    };

    const resize = debounce(resizeChart, 300);

    const setOption = (data: any[] = []) => {
      const option = {
        series: [
          {
            type: "wordCloud",
            gridSize: 2,
            left: "center",
            top: "center",
            width: "95%",
            height: "95%",
            right: null,
            bottom: null,
            sizeRange: [12, 14],
            rotationRange: [-90, 90],
            rotationStep: 35,
            shape: "circle",
            drawOutOfBound: false,
            textStyle: {
              normal: {
                fontSize: 12,
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data,
          },
        ],
      };
      renderChart(option);
    };

    onMounted(() => {
      if (chartDom.value) {
        setOption(props.tags);
        watch(
          () => props.tags,
          () => {
            setOption(props.tags);
          },
          { deep: true }
        );
        // init echarts
        addListener(chartDom.value, resize);
      }
    });

    onUnmounted(() => {
      if (chartDom.value) {
        removeListener(chartDom.value, resize);
      }
      chart?.dispose();
      chart = null;
    });

    return {
      chartDom,
    };
  },
});
</script>

<style lang="less" scoped>
.tagCloud {
  overflow: hidden;
  canvas {
    transform-origin: 0 0;
  }
}
</style>
