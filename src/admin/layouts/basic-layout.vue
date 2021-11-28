<template>
  <pro-provider :content-width="contentWidth">
    <a-layout class="ant-pro-basicLayout">
      <template v-if="isMobile">
        <a-drawer
          :bodyStyle="{ padding: 0, height: '100%' }"
          placement="left"
          :width="sideWidth"
          :closable="false"
          :visible="!collapsed"
          @update:visible="updateCollapsed"
        >
          <sider-menu
            style="height: 100%"
            :theme="theme"
            :layout="layout"
            :fixed="fixedSidebar"
            :menus="menus"
            :sider-width="sideWidth"
            :split-menus="false"
            :collapsed-button="false"
            :collapsed="false"
            v-model:open-keys="openKeys"
            v-model:selected-keys="selectedKeys"
          />
        </a-drawer>
      </template>
      <sider-menu
        v-else-if="!hasTopMenu"
        :theme="theme"
        :layout="layout"
        :fixed="fixedSidebar"
        :menus="menus"
        :sider-width="sideWidth"
        :split-menus="splitMenus"
        :collapsed-button="!splitMenus"
        v-model:collapsed="collapsed"
        v-model:open-keys="openKeys"
        v-model:selected-keys="selectedKeys"
      />
      <a-layout>
        <header-view
          :theme="theme"
          :layout="layout"
          :menus="menus"
          :sider-width="sideWidth"
          :has-sider-menu="hasSideMenu"
          :fixed-header="fixedHeader"
          :split-menus="splitMenus"
          v-model:collapsed="collapsed"
          v-model:open-keys="openKeys"
          v-model:selected-keys="selectedKeys"
        >
          <div style="text-align: right">
            <notice-icon />
            <avatar-dropdown :current-user="currentUser" />
            <select-lang />
          </div>
        </header-view>
        <multi-tab
          v-if="multiTab"
          :fixed="multiTabFixed"
          :sider-width="sideWidth"
        />
        <router-view v-slot="{ Component }">
          <wrap-content>
            <component :is="Component"></component>
          </wrap-content>
        </router-view>
        <global-footer />
      </a-layout>
    </a-layout>
    <setting-drawer />
  </pro-provider>
</template>

<script lang="ts">
import { defineComponent, computed, inject, ref } from "vue";
import { useI18n } from "vue-i18n";
import { genMenuInfo } from "../utils/menu-util";
import { default as WrapContent } from "@/admin/components/base-layouts/wrap-content/index.vue";
import { default as GlobalFooter } from "@/admin/components/base-layouts/global-footer/index.vue";
import { default as SiderMenu } from "@/admin/components/base-layouts/sider-menu/index.vue";
import { default as HeaderView } from "@/admin/components/base-layouts/header/index.vue";
import { default as SelectLang } from "@/admin/components/select-lang/index.vue";
import { default as AvatarDropdown } from "@/admin/components/avatar-dropdown.vue";
import { default as SettingDrawer } from "@/admin/components/setting-drawer/index.vue";
import { default as NoticeIcon } from "@/admin/components/notice-icon/index.vue";

import { MultiTab } from "../components/multi-tab";
import { useStore } from "vuex";
import { injectMenuState } from "./use-menu-state";

export default defineComponent({
  name: "BasicLayout",
  setup() {
    const store = useStore();
    const { t } = useI18n();
    const menuState = injectMenuState();
    const isMobile = inject("isMobile", ref(false));
    const currentUser = computed(() => store.getters["user/currentUser"]);
    const hasSideMenu = computed(
      () =>
        menuState.layout.value === "side" || menuState.layout.value === "left"
    );
    const hasTopMenu = computed(() => menuState.layout.value === "top");

    // gen menus
    const allowRouters = computed(() => store.getters[`user/allowRouters`]); // genMenuInfo(filterMenu(routes)).menus;
    const menus = computed(() => genMenuInfo(allowRouters.value).menus);
    return {
      t,
      currentUser,
      menus,
      ...menuState,
      hasSideMenu,
      hasTopMenu,
      isMobile,
    };
  },
  components: {
    MultiTab,
    WrapContent,
    SiderMenu,
    GlobalFooter,
    HeaderView,
    SelectLang,
    AvatarDropdown,
    SettingDrawer,
    NoticeIcon,
  },
});
</script>

<style lang="less">
@import "../components/base-layouts/basic-layout.less";
</style>
