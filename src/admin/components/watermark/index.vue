<template>
  <div
    :style="{
      position: 'relative',
    }"
    :class="wrapperCls"
  >
    <slot />
    <div
      v-if="!disabled"
      :class="waterMakrCls"
      :style="{
        zIndex,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundSize: `${gapX + width}px`,
        pointerEvents: 'none',
        backgroundRepeat: 'repeat',
        backgroundImage: `url('${base64Url}')`,
        ...markStyle,
      }"
    />
  </div>
</template>

<script lang="ts">
import { inject, defineComponent, computed, ref, watchEffect } from "vue";
import type { CSSProperties } from "vue";
import PropTypes from "ant-design-vue/es/_util/vue-types";
import { useProProvider } from "../base-layouts/pro-provider";

export type WaterMarkProps = {
  /** 是否禁用水印 */
  disabled?: boolean;
  /** 水印样式 */
  markStyle?: CSSProperties;
  /** 水印类名 */
  markClassName?: string;
  /** 水印之间的水平间距 */
  gapX?: number;
  /** 水印之间的垂直间距 */
  gapY?: number;
  /** 追加的水印元素的z-index */
  zIndex?: number;
  /** 水印的宽度 */
  width?: number;
  /** 水印的高度 */
  height?: number;
  /** 水印在canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 offsetTop = gapY / 2 */
  offsetTop?: number; // 水印图片距离绘制 canvas 单元的顶部距离
  /** 水印在canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 offsetTop = gapX / 2 */
  offsetLeft?: number;
  /** 水印绘制时，旋转的角度，单位 ° */
  rotate?: number;
  /** ClassName 前缀 */
  prefixCls?: string;
  /** 高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。 */
  image?: string;
  /** 水印文字内容 */
  content?: string;
  /** 文字颜色 */
  fontColor?: string;
  /** 文字样式 */
  fontStyle?: "none" | "normal" | "italic" | "oblique";
  /** 文字族 */
  fontFamily?: string;
  /** 文字粗细 */
  fontWeight?: "normal" | "light" | "weight" | number;
  /** 文字大小 */
  fontSize?: number | string;
};

const getPixelRatio = (context: any) => {
  if (!context) {
    return 1;
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};

export default defineComponent({
  props: {
    disabled: PropTypes.bool.def(false),
    markStyle: PropTypes.object,
    markClassName: PropTypes.string,
    prefixCls: PropTypes.string.def("pro"),
    zIndex: PropTypes.number.def(999),
    gapX: PropTypes.number.def(212),
    gapY: PropTypes.number.def(222),
    width: PropTypes.number.def(120),
    height: PropTypes.number.def(64),
    rotate: PropTypes.number.def(-22),
    fontStyle: PropTypes.string.def("normal"),
    fontWeight: PropTypes.string.def("normal"),
    fontColor: PropTypes.string,
    fontSize: PropTypes.number.def(16),
    fontFamily: PropTypes.string.def("sans-serif"),
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    image: PropTypes.string,
    content: PropTypes.string,
  },
  setup(props) {
    const { getPrefixCls } = useProProvider();
    const prefixCls = computed(() => getPrefixCls("admin-pro-water-mark"));
    const wrapperCls = computed(() => `${prefixCls.value}-wrapper`);
    const waterMakrCls = computed(() => {
      return {
        [`${prefixCls.value}`]: prefixCls.value,
        [`${props.markClassName}`]: props.markClassName,
      };
    });
    const base64Url = ref("");
    const isRealDark = inject("isRealDark", ref(false));
    const color = computed(() => {
      return (
        props.fontColor ??
        (isRealDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0,0,0,.15)")
      );
    });

    watchEffect(() => {
      if (props.disabled) {
        return;
      }
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const ratio = getPixelRatio(ctx);

      const canvasWidth = `${(props.gapX + props.width) * ratio}px`;
      const canvasHeight = `${(props.gapY + props.height) * ratio}px`;
      const canvasOffsetLeft = props.offsetLeft || props.gapX / 2;
      const canvasOffsetTop = props.offsetTop || props.gapY / 2;

      canvas.setAttribute("width", canvasWidth);
      canvas.setAttribute("height", canvasHeight);

      if (ctx) {
        // 旋转字符 rotate
        ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
        ctx.rotate((Math.PI / 180) * Number(props.rotate));
        const markWidth = props.width * ratio;
        const markHeight = props.height * ratio;

        if (props.image) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = props.image;
          img.onload = () => {
            ctx.drawImage(img, 0, 0, markWidth, markHeight);
            base64Url.value = canvas.toDataURL();
          };
        } else if (props.content) {
          const markSize = Number(props.fontSize) * ratio;
          ctx.font = `${props.fontStyle} normal ${props.fontWeight} ${markSize}px/${markHeight}px ${props.fontFamily}`;
          ctx.fillStyle = color.value;
          ctx.fillText(props.content, 0, 0);
          base64Url.value = canvas.toDataURL();
        }
      } else {
        // eslint-disable-next-line no-console
        console.error("当前环境不支持Canvas");
      }
    });

    return {
      wrapperCls,
      waterMakrCls,
      base64Url,
    };
  },
});
</script>
