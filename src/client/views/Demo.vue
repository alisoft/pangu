<template>
  <div v-if="!loading" ref="readmeRef" class="readme" v-html="readmeBody" />
  <loading v-else class="loading" />
  <van-button
    round
    type="primary"
    icon="down"
    :color="color"
    v-if="!loading && showReadMore"
    ref="readMoreRef"
    @click="readMore"
    class="read-more"
  >
    {{ t("readMore") }}
  </van-button>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  watch,
  nextTick,
} from "vue";
import { Button } from "vant";
import { useI18n } from "vue-i18n";
import { fetchDemoData } from "@/apis/demo";
import Loading from "@/components/loading";

export default defineComponent({
  name: "Demo",
  components: { Loading, VanButton: Button },
  setup() {
    const readmeBody = ref(null);
    const readmeRef = ref(null);
    const readMoreRef = ref(null);
    const loading = ref(false);
    const showReadMore = ref(false);
    const color = ref(null);
    let media = window.matchMedia("(prefers-color-scheme: dark)");
    const { t, locale, availableLocales } = useI18n();

    const fetchData = async () => {
      return await fetchDemoData();
    };

    const addDarkModeEventListener = (event, darkMode) => {
      if (["dark", "light"].includes(darkMode)) {
        document.body.setAttribute("data-theme", darkMode);
        // capture port2 coming from the Dart side
        if (event.ports[0] != null) {
          // the port is ready for communication,
          // so you can use port.postMessage(message); wherever you want
          const port = event.ports[0];
          // To listen to messages coming from the Dart side, set the onmessage event listener
          port.onmessage = function (event) {
            // event.data contains the message data coming from the Dart side
            console.log(event.data);
          };
        }
      }
    };

    const addLocaleEventListener = (event, l) => {
      if (availableLocales.includes(l)) {
        locale.value = l;
        // capture port2 coming from the Dart side
        if (event.ports[0] != null) {
          // the port is ready for communication,
          // so you can use port.postMessage(message); wherever you want
          const port = event.ports[0];
          // To listen to messages coming from the Dart side, set the onmessage event listener
          port.onmessage = function (event) {
            // event.data contains the message data coming from the Dart side
            console.log(event.data);
          };
        }
      }
    };

    const addThemeEventListener = (event, c) => {
      color.value = `#${Number(c).toString(16).substring(2)}`;
    };

    const addMessageEventListener = (event) => {
      if (typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        if (data.darkMode) {
          addDarkModeEventListener(event, data.darkMode);
        }
        if (data.locale) {
          addLocaleEventListener(event, data.locale);
        }
        if (data.color) {
          addThemeEventListener(event, data.color);
        }
      } catch (e) {
        console.error(e);
      }
    };

    const readMore = () => {
      if (window.flutter_inappwebview) {
        const { height } = readmeRef.value.getBoundingClientRect();
        const args = [height];
        window.flutter_inappwebview
          .callHandler("expandReadme", ...args)
          .then((result) => {
            if (result.result) {
              showReadMore.value = false;
            }
          });
      }
    };

    const addAutoChangedEventListener = (event) => {
      const prefersDarkMode = event && event.matches;
      document.body.setAttribute(
        "data-theme",
        prefersDarkMode ? "dark" : "light"
      );
    };

    onMounted(async () => {
      media &&
        media.addEventListener("change", addAutoChangedEventListener, false);
      window.addEventListener("message", addMessageEventListener, false);
      showReadMore.value = !!window.flutter_inappwebview;
      loading.value = true;
      try {
        readmeBody.value = await fetchData();
        loading.value = false;
      } catch (e) {
        loading.value = false;
        console.error(e);
      }
    });

    onBeforeUnmount(() => {
      media &&
        media.removeEventListener("change", addAutoChangedEventListener, false);
      window.removeEventListener("message", addMessageEventListener, false);
    });

    const addOnLoadEventListener = (event, img) => {
      const { width: containerWidth } = readmeRef.value.getBoundingClientRect();
      const { width: imgWidth } = img.getBoundingClientRect();
      if (imgWidth > containerWidth) {
        img.style.width = `${containerWidth}px`;
      }

      if (window.flutter_inappwebview && !showReadMore.value) {
        const { height } = readmeRef.value.getBoundingClientRect();
        const args = [height];
        window.flutter_inappwebview.callHandler("expandReadme", ...args);
      }
    };

    const addResizeEventListener = () => {
      const imgs = document.getElementsByTagName("img");
      if (imgs && imgs.length > 0) {
        const length = imgs.length;
        [...new Array(length)].forEach((_, idx) => {
          const img = imgs.item(idx);
          img.addEventListener("load", (event) =>
            addOnLoadEventListener(event, img)
          );
        });
      }
    };

    watch(readmeBody, (newReadmeBody) => {
      if (newReadmeBody) {
        nextTick(() => {
          addResizeEventListener();
        });
      }
    });

    return {
      readmeRef,
      readmeBody,
      t,
      loading,
      readMore,
      readMoreRef,
      showReadMore,
      color,
    };
  },
});
</script>

<style scoped lang="scss">
body {
  background-color: var(--color-bg);
  color: var(--color);
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    background-color: var(--color-bg);
    color: var(--color);
    .loading {
      height: 300px;
    }
    .read-more {
      position: absolute;
      top: 250px;
      left: 50%;
      width: 120px;
      margin-left: -60px;
      height: 32px;
      line-height: 32px;
      //border-radius: 16px;
      //border: 1px solid #f2f2f2;
      //color: var(--color);
      //background-color: var(--color-bg);
      //text-align: center;
    }
  }
}
</style>
