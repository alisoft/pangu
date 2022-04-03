<template>
  <section class="VideoBg" ref="bgRef">
    <video autoplay playsinline loop :muted="muted" ref="videoRef">
      <source
        v-for="source in sources"
        :key="source"
        :src="source"
        :type="getMediaType(source)"
      />
    </video>
    <div class="VideoBg__content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "VideoBackground",
  props: {
    sources: {
      type: Array,
      required: true,
    },
    img: {
      type: String,
    },
    muted: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const videoRatio = ref(0);
    const videoRef = ref();
    const bgRef = ref();

    const resize = () => {
      setContainerHeight();
      if (videoCanPlay()) {
        setVideoSize();
      }
    };
    const videoCanPlay = () => {
      return !!videoRef.value.canPlayType;
    };
    const setImageUrl = () => {
      if (props.img) {
        videoRef.value.style.backgroundImage = `url(${props.img})`;
      }
    };
    const setContainerHeight = () => {
      bgRef.value.style.height = `${window.innerHeight}px`;
    };
    const setVideoSize = () => {
      let width,
        height,
        containerRatio = bgRef.value.offsetWidth / bgRef.value.offsetHeight;
      if (containerRatio > videoRatio.value) {
        width = bgRef.value.offsetWidth;
      } else {
        height = bgRef.value.offsetHeight;
      }
      videoRef.value.style.width = width ? `${width}px` : "auto";
      videoRef.value.style.height = height ? `${height}px` : "auto";
    };

    const getMediaType = (src: string): string => {
      return "video/" + src.split(".").pop();
    };

    onMounted(() => {
      setImageUrl();
      setContainerHeight();
      if (videoCanPlay()) {
        videoRef.value.oncanplay = () => {
          if (!videoRef.value) return;
          videoRatio.value =
            videoRef.value.videoWidth / videoRef.value.videoHeight;
          setVideoSize();
          videoRef.value.style.visibility = "visible";
        };
      }
      window.addEventListener("resize", resize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
    });

    return {
      bgRef,
      videoRef,
      videoRatio,
      getMediaType,
    };
  },
});
</script>

<style>
.VideoBg {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.VideoBg video {
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
}

.VideoBg__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
