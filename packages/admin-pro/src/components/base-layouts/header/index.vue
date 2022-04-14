<template>
  <a-layout-header
    v-if="needFixedHeader"
    :style="{
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      background: 'transparent',
    }"
  />
  <a-layout-header
    :class="classNames"
    :style="{
      padding: 0,
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      width,
      zIndex: isMix ? 99 : 9,
      right,
    }"
  >
    <top-nav-header
      v-if="(isTop || isMix) && !isMobile"
      mode="horizontal"
      :theme="theme"
      :layout="layout"
      :menus="needShowMenu ? computedMenus : []"
      :open-keys="openKeys"
      :selected-keys="splitMenus ? [...openKeys, ...selectedKeys] : selectedKeys"
      @update:openKeys="handleOpenKeys"
      @update:selectedKeys="handleSelectedKeys"
    >
      <template #rightContent>
        <slot />
      </template>
    </top-nav-header>
    <global-header
      v-else
      :isMobile="isMobile"
      :layout="layout"
      :collapsed="collapsed"
      :collapsed-button="collapsedButton"
      @collapse="handleCollapse"
    >
      <template #rightContent>
        <slot />
      </template>
    </global-header>
  </a-layout-header>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, ref, computed, toRefs, inject } from 'vue';
import { useProProvider } from '../pro-provider/index';
import { getMenuFirstChildren } from '@/utils/menu-util';
import TopNavHeader from '../top-nav-header/index.vue';
import GlobalHeader from '../global-header/index.vue';
import type { RouteProps } from '@/components/base-layouts/typing';
import type { MenuTheme } from 'ant-design-vue';

export default defineComponent({
  name: 'HeaderView',
  props: {
    fixedHeader: {
      type: Boolean,
      default: false,
    },
    //
    layout: {
      type: String,
      default: 'side',
    },
    theme: {
      type: String as PropType<MenuTheme>,
      default: 'dark',
    },
    menus: {
      type: Array as PropType<RouteProps[]>,
      default: (): Record<string, unknown>[] => [],
    },
    openKeys: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedKeys: {
      type: Array as PropType<string[]>,
      required: true,
    },
    hasSiderMenu: {
      type: Boolean,
      default: false,
    },
    collapsed: {
      type: Boolean,
      default: (): boolean => false,
    },
    siderWidth: {
      type: Number,
      default: 208,
    },
    collapsedWidth: {
      type: Number,
      default: 48,
    },
    collapsedButton: {
      type: Boolean,
      default: () => true,
    },
    headerHeight: {
      type: Number,
      default: 48,
    },
    splitMenus: {
      type: Boolean,
      default: false,
    },
    prefixCls: {
      type: String,
      default: () => undefined,
    },
  },
  emits: ['update:openKeys', 'update:selectedKeys', 'update:collapsed'],
  // inheritAttrs: true,
  setup(props, { emit }) {
    const { getPrefixCls } = useProProvider();
    const {
      prefixCls: propPrefixCls,
      collapsed,
      fixedHeader,
      hasSiderMenu,
      siderWidth,
      collapsedWidth,
      splitMenus,
    } = toRefs(props);
    const prefixCls = propPrefixCls.value || getPrefixCls();
    const isMobile = inject('isMobile', ref(false));
    const isMix = computed(() => props.layout === 'mix');
    const isTop = computed(() => props.layout === 'top');
    const isLeft = computed(() => props.layout === 'left');
    const needShowMenu = computed(() => (isMix.value ? splitMenus.value : true));
    const needFixedHeader = computed(() => fixedHeader.value || isMix.value);
    const needSettingWidth = computed(
      () => needFixedHeader.value && hasSiderMenu.value && !isTop.value && !isMobile.value,
    );
    const computedMenus = computed(() =>
      splitMenus.value ? getMenuFirstChildren(props.menus) : props.menus,
    );

    const classNames = ref({
      [`${prefixCls}-fixed-header`]: needFixedHeader,
      [`${prefixCls}-top-menu`]: isTop.value,
    });
    const width = computed(() =>
      // 收起状态 或是 left 布局模式时，计算收起宽度
      !isMix.value && needSettingWidth.value && !isMobile.value
        ? `calc(100% - ${
            collapsed.value || isLeft.value ? collapsedWidth.value : siderWidth.value
          }px)`
        : '100%',
    );

    const right = computed(() => (needFixedHeader.value ? 0 : undefined));

    const handleSelectedKeys = (selectedKeys: string[]): void => {
      emit('update:selectedKeys', selectedKeys);
    };
    const handleOpenKeys = (openKeys: string[]): void => {
      emit('update:openKeys', openKeys);
    };
    const handleCollapse = (collapsed: boolean): void => {
      emit('update:collapsed', collapsed);
    };
    return {
      classNames,
      width,
      right,
      needFixedHeader,
      isTop,
      isMix,
      isLeft,
      needShowMenu,
      needSettingWidth,
      computedMenus,
      isMobile,
      handleSelectedKeys,
      handleOpenKeys,
      handleCollapse,
    };
  },
  components: {
    TopNavHeader,
    GlobalHeader,
  },
});
</script>

<style lang="less">
@import url('./index.less');
</style>
