<template>
  <div ref="chartDom" />
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import type { ECharts } from "echarts";
import echarts from "echarts";
import debounce from "lodash.debounce";
import { addListener, removeListener } from "resize-detector";
import dark from "./dark";

echarts.registerTheme("dark-pro", dark);

export default defineComponent({
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const chartDom = ref<HTMLDivElement | null>(null);
    let chart: ECharts | null = null;
    const isRealDark = inject("isRealDark", ref(false));
    const resizeChart = () => {
      chart?.resize();
    };

    const resize = debounce(resizeChart, 300);

    const disposeChart = () => {
      if (chartDom.value) {
        removeListener(chartDom.value, resize);
      }
      chart?.dispose();
      chart = null;
    };
    const initChart = () => {
      disposeChart();
      if (chartDom.value) {
        // init echarts
        chart = echarts.init(
          chartDom.value,
          isRealDark.value ? "dark-pro" : undefined
        );
        chart.setOption(props.option);
        addListener(chartDom.value, resize);
      }
    };

    watch(
      isRealDark,
      () => {
        initChart();
      },
      { flush: "post" }
    );
    onMounted(() => {
      watch(
        () => props.option,
        () => {
          chart?.setOption(props.option);
        },
        { deep: true, flush: "post" }
      );
      initChart();
    });

    onUnmounted(() => {
      disposeChart();
    });

    return {
      chartDom,
    };
  },
});
</script>
