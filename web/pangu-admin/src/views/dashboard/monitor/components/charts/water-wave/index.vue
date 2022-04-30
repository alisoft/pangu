<template>
  <div ref="root" class="waterWave" :style="{ transform: `scale(${radio})` }">
    <div :style="{ width: `${height}px`, height: `${height}px`, overflow: 'hidden' }">
      <canvas ref="node" class="waterWaveCanvasWrapper" :width="height * 2" :height="height * 2" />
    </div>
    <div class="text" :style="{ width: `${height}px` }">
      <span v-if="title">{{ title }}</span>
      <h4>{{ percent }}%</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'WaterWave',
  props: {
    height: {
      type: Number,
      default: 0,
    },
    percent: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const root = ref<HTMLDivElement>();
    const node = ref<HTMLCanvasElement>();
    const timer = ref(0);
    const radio = ref(1);

    const resize = () => {
      if (root.value) {
        const { height = 1 } = props;
        const { offsetWidth } = root.value.parentNode as HTMLDivElement;
        radio.value = offsetWidth < height ? offsetWidth / height : 1;
      }
    };
    const renderChart = (type: any) => {
      const { percent, color = '#3ea2ff' } = props;
      const data = percent / 100;
      cancelAnimationFrame(timer.value);
      if (!node.value || (data !== 0 && !data)) {
        return;
      }
      const canvas = node.value;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const radius = canvasWidth / 2;
      const lineWidth = 2;
      const cR = radius - lineWidth;

      ctx.beginPath();
      ctx.lineWidth = lineWidth * 2;

      const axisLength = canvasWidth - lineWidth;
      const unit = axisLength / 8;
      const range = 0.2; // 振幅
      let currRange = range;
      const xOffset = lineWidth;
      let sp = 0; // 周期偏移量
      let currData = 0;
      const waveupsp = 0.005; // 水波上涨速度

      let arcStack: [number, number][] = [];
      const bR = radius - lineWidth;
      const circleOffset = -(Math.PI / 2);
      let circleLock = true;
      for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
        arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
      }
      const cStartPoint = arcStack.shift() || [0, 0];
      ctx.strokeStyle = color;
      ctx.moveTo(cStartPoint[0], cStartPoint[1]);

      function drawSin() {
        if (!ctx) {
          return;
        }
        ctx.beginPath();
        ctx.save();

        const sinStack: [number, number][] = [];
        for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
          const x = sp + (xOffset + i) / unit;
          const y = Math.sin(x) * currRange;
          const dx = i;
          const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

          ctx.lineTo(dx, dy);
          sinStack.push([dx, dy]);
        }

        const startPoint = sinStack.shift() || [0, 0];

        ctx.lineTo(xOffset + axisLength, canvasHeight);
        ctx.lineTo(xOffset, canvasHeight);
        ctx.lineTo(startPoint[0], startPoint[1]);

        const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(1, color);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
      function render() {
        if (!ctx) {
          return;
        }
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (circleLock && type !== 'update') {
          if (arcStack.length) {
            const temp = arcStack.shift() || [0, 0];
            ctx.lineTo(temp[0], temp[1]);
            ctx.stroke();
          } else {
            circleLock = false;
            ctx.lineTo(cStartPoint[0], cStartPoint[1]);
            ctx.stroke();
            arcStack = [];

            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);

            ctx.beginPath();
            ctx.save();
            ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);

            ctx.restore();
            ctx.clip();
            ctx.fillStyle = color;
          }
        } else {
          if (data >= 0.85) {
            if (currRange > range / 4) {
              const t = range * 0.01;
              currRange -= t;
            }
          } else if (data <= 0.1) {
            if (currRange < range * 1.5) {
              const t = range * 0.01;
              currRange += t;
            }
          } else {
            if (currRange <= range) {
              const t = range * 0.01;
              currRange += t;
            }
            if (currRange >= range) {
              const t = range * 0.01;
              currRange -= t;
            }
          }
          if (data - currData > 0) {
            currData += waveupsp;
          }
          if (data - currData < 0) {
            currData -= waveupsp;
          }

          sp += 0.07;
          drawSin();
        }
        timer.value = requestAnimationFrame(render);
      }
      render();
    };

    onMounted(() => {
      renderChart(null);
      window.addEventListener(
        'resize',
        () => {
          requestAnimationFrame(() => resize());
        },
        { passive: true },
      );
    });

    onUnmounted(() => {
      cancelAnimationFrame(timer.value);
      if (node.value) {
        node.value.innerHTML = '';
      }
      window.removeEventListener('resize', resize);
    });

    return {
      radio,
      root,
      node,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
