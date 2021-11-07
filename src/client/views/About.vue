<template>
  <PullRefresh v-model="refreshing" @refresh="onRefresh">
    <div>About</div>
  </PullRefresh>
</template>

<script>
import { defineComponent, watch, ref } from "vue";
import { PullRefresh } from "vant";
import {
  withTheme,
  withPullDown,
  withLocale,
  withDarkMode,
  withDarkModeAutoChanged,
} from "../utils/mixins";

export default defineComponent({
  name: "About",
  components: { PullRefresh },
  setup() {
    withDarkModeAutoChanged();
    withDarkMode();
    const { color } = withTheme();
    const { t } = withLocale();
    const { refreshing } = withPullDown();
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 20; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

    watch(refreshing, (newVal) => {
      if (newVal) {
        onRefresh();
      }
    });

    return {
      t,
      loading,
      color,
      refreshing,
      onRefresh,
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
  }
}
</style>
