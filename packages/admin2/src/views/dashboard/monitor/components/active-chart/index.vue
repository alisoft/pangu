<template>
  <div class="active-chart">
    <a-statistic title="目标评估" value="有望达到预期" />
    <div style="margin-top: 32px">
      <mini-area :height="84" :data="activeData" color="#d1e9ff" line />
    </div>
    <div v-if="activeData">
      <div class="activeChartGrid">
        <p>{{ [...activeData].sort()[activeData.length - 1].y + 200 }} 亿元</p>
        <p>{{ [...activeData].sort()[Math.floor(activeData.length / 2)].y }} 亿元</p>
      </div>
      <div class="dashed-line">
        <div class="line" />
      </div>
      <div class="dashed-line">
        <div class="line" />
      </div>
    </div>
    <div v-if="activeData" class="active-chart-legend">
      <span>00:00</span>
      <span>{{ activeData[Math.floor(activeData.length / 2)].x }}</span>
      <span>{{ activeData[activeData.length - 1].x }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { MiniArea } from '../../../analysis/components/charts';
import './index.less';

function fixedZero(val: number) {
  return val * 1 < 10 ? `0${val}` : val;
}

function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50,
    });
  }
  return activeData;
}

function useLoopData() {
  const timer = ref<number | undefined>(undefined);
  const requestRef = ref<number | undefined>(undefined);
  const activeData = ref<any>(getActiveData());

  const loopData = () => {
    requestRef.value = requestAnimationFrame(() => {
      timer.value = setTimeout(() => {
        activeData.value = getActiveData();
        nextTick(() => {
          loopData();
        });
      }, 1000);
    });
  };

  const clear = () => {
    clearTimeout(timer.value);
    if (requestRef.value) {
      cancelAnimationFrame(requestRef.value);
    }
  };

  onMounted(() => {
    loopData();

    // cancel
    onUnmounted(() => {
      clear();
    });
  });

  return {
    clear,
    activeData,
  };
}

export default defineComponent({
  name: 'ActiveChart',
  setup() {
    const { activeData } = useLoopData();

    return {
      activeData,
    };
  },
  components: {
    MiniArea,
  },
});
</script>
