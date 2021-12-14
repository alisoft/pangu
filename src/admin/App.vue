<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { computed, provide, watch } from "vue";
import { useStore } from "vuex";
import { STORAGE_LANG_KEY } from "./store/mutation-type";
import { localStorage } from "./utils/local-storage";
import useMediaQuery from "./utils/hooks/useMediaQuery";
import { useI18n } from "vue-i18n";
import useMenuState, { MenuStateSymbol } from "./layouts/use-menu-state";
import { useMultiTabStateProvider } from "./components/multi-tab";
import { withMounted } from "@/common/utils/mixins";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const { mounted } = withMounted();
    const multiTabState = useMultiTabStateProvider();
    const colSize = useMediaQuery();
    const isMobile = computed(
      () => colSize.value === "sm" || colSize.value === "xs"
    );
    const menuState = useMenuState(
      {
        collapsed: isMobile.value,
        openKeys: [] as string[],
        selectedKeys: [] as string[],
        isMobile,
      },
      multiTabState
    );
    const lang = localStorage.get(STORAGE_LANG_KEY, "en-US");
    if (lang) {
      store.dispatch("app/SET_LANG", lang);
    }
    const theme = computed(() => store.getters["app/navTheme"]);

    watch(
      theme,
      () => {
        if (!mounted.value) return;
        if (theme.value === "realDark") {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-pro-theme", "antdv-pro-theme-dark");
        } else {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-pro-theme", "antdv-pro-theme-light");
        }
      },
      { immediate: true }
    );
    provide("isMobile", isMobile);
    provide(
      "isRealDark",
      computed(() => theme.value === "realDark")
    );
    provide(MenuStateSymbol, menuState);
    const locale = computed(() => {
      return i18n.getLocaleMessage(i18n.locale.value).antd;
    });

    return {
      locale,
    };
  },
};
</script>
