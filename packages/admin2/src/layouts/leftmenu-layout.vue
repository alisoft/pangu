<template>
  <pro-provider :content-width="contentWidth">
    <a-layout class="ant-pro-leftmenu-layout">
      <sider-menu
        theme="dark"
        layout="left"
        prefix-cls="ant-pro-leftmenu-sider"
        :fixed="true"
        :menus="mainMenus"
        :sider-width="sideWidth"
        :collapsed-width="collapsedWidth"
        :open-keys="[]"
        v-model:collapsed="collapsed"
        :selected-keys="firstSelectedKeys"
        @itemHover="handleItemHover"
        @mouseleave="handleMouseLeave"
        @update:selectedKeys="handleSelectedKeysChange"
        :customItem="customItem"
      ></sider-menu>
      <a-layout style="position: relative; flex-direction: column">
        <header-view
          :theme="theme"
          :layout="layout"
          :menus="menus"
          :has-sider-menu="true"
          :fixed-header="true"
          :split-menus="splitMenus"
          :collapsed-button="false"
          :collapsed-width="collapsed ? collapsedWidth : sideWidth"
          :selected-keys="[]"
          :open-keys="[]"
        >
          <div style="text-align: right">
            <notice-icon />
            <avatar-dropdown :current-user="currentUser" />
            <select-lang />
          </div>
        </header-view>
        <a-layout style="width: auto">
          <sider-menu
            key="menu"
            :style="{
              zIndex: 7,
              position: 'fixed',
              left: `${collapsed ? collapsedWidth : sideWidth}px`,
            }"
            class="ant-pro-has-leftmenu"
            theme="light"
            :layout="layout"
            :fixed="true"
            :menus="menus"
            :sider-width="secondSideWidth"
            :split-menus="true"
            :collapsed-button="false"
            :collapsed="false"
            v-model:open-keys="openKeys"
            v-model:selected-keys="selectedKeys"
          ></sider-menu>
          <section style="flex: auto; overflow-x: hidden" class="ant-pro-leftmenu-layout-content">
            <wrap-content>
              <router-view />
              <slot />
            </wrap-content>
            <global-footer />
          </section>
        </a-layout>
        <div
          v-show="showHoverSiderMenu"
          :style="{
            position: 'fixed',
            left: `${collapsed ? collapsedWidth : sideWidth}px`,
            zIndex: 8,
            height: '100%',
          }"
          @mouseenter="cancelSetMenuHover"
          @mouseleave="handleMouseLeave"
        >
          <sider-menu
            :style="{ height: '100%' }"
            key="hoverMenu"
            class="ant-pro-has-leftmenu"
            theme="light"
            :layout="layout"
            :fixed="false"
            :menus="secondMenus"
            :sider-width="secondSideWidth"
            :collapsed-button="false"
            :collapsed="false"
            v-model:open-keys="openKeys"
            v-model:selected-keys="selectedKeys"
          ></sider-menu>
        </div>
      </a-layout>
    </a-layout>
    <setting-drawer />
  </pro-provider>
</template>

<script lang="ts">
import type { VNode } from 'vue';
import { defineComponent, ref, computed, watch, cloneVNode } from 'vue';
import { genMenuInfo, getMenuFirstChildren } from '@/utils/menu-util';
import useDelayReset from '@/utils/hooks/useDelayReset';
import { default as WrapContent } from '@/components/base-layouts/wrap-content/index.vue';
import { default as GlobalFooter } from '@/components/base-layouts/global-footer/index.vue';
import { default as SiderMenu } from '@/components/base-layouts/sider-menu/index.vue';
import { default as HeaderView } from '@/components/base-layouts/header/index.vue';
import { default as SelectLang } from '@/components/select-lang/index.vue';
import { default as AvatarDropdown } from '@/components/avatar-dropdown.vue';
import { default as SettingDrawer } from '@/components/setting-drawer/index.vue';
import { injectMenuState } from './use-menu-state';
import { useStore } from 'vuex';
import { default as NoticeIcon } from '@/components/notice-icon/index.vue';

export default defineComponent({
  name: 'LeftMenuLayout',
  setup() {
    const store = useStore();
    const currentUser = computed(() => store.getters['user/currentUser']);

    // gen menus
    const allowRouters = computed(() => store.getters[`user/allowRouters`]); // genMenuInfo(filterMenu(routes)).menus;
    const menus = computed(() => genMenuInfo(allowRouters.value).menus);
    const mainMenus = computed(() => getMenuFirstChildren(menus.value));
    const menuState = injectMenuState();
    const firstSelectedKeys = computed(() => {
      const key = menuState.selectedKeys ? menuState.selectedKeys.value[0] : undefined;
      return key ? [`/${key.split('/')[1]}`] : [];
    });
    const [menuHover, setMenuHover, cancelSetMenuHover] = useDelayReset(100);
    const hoverMenuKey = ref('');
    const handleItemHover = (item: { key: string }) => {
      console.log('key', item);
      cancelSetMenuHover();
      menuHover.value = true;
      hoverMenuKey.value = item.key;
    };
    const handleSelectedKeysChange = (keys: string[]) => {
      const menu = menus.value.find(m => m.path === keys[0]);
      const toKey = menu && menu.redirect ? [menu.redirect] : keys;
      menuState.updateSelectKeys(toKey);
    };
    const handleMouseLeave = () => {
      setMenuHover(false);
    };
    watch(menuHover, () => {
      // 重置为空
      if (!menuHover.value) {
        hoverMenuKey.value = '';
      }
    });
    const secondMenus = computed(() => {
      return menus.value.find(m => m.path === hoverMenuKey.value)?.children || [];
    });
    // 是否展示hover一级时，展示对应的二级菜单
    const showHoverSiderMenu = computed(() => {
      return (
        menuHover.value &&
        !menuState.selectedKeys?.value.includes(hoverMenuKey.value) &&
        secondMenus.value &&
        secondMenus.value.length
      );
    });

    const customItem = (vnode: VNode, opt: any) => {
      return cloneVNode(vnode, {
        class: opt.path === hoverMenuKey.value ? 'hover-menu-active' : '',
      });
    };

    return {
      menus,
      mainMenus,
      collapsedFirst: ref(false),
      ...menuState,
      firstSelectedKeys,
      currentUser,
      handleItemHover,
      handleMouseLeave,
      showHoverSiderMenu,
      secondMenus,
      hoverMenuKey,
      cancelSetMenuHover,
      customItem,
      handleSelectedKeysChange,
    };
  },
  components: {
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
@import '../components/base-layouts/leftmenu-layout.less';
@import '../components/base-layouts/leftmenu/index.less';
</style>
