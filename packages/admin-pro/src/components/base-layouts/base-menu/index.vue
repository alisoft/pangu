<template>
  <a-menu
    :theme="theme"
    :mode="mode"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    @openChange="handleOpenChange"
    @select="handleSelect"
    v-bind="dynamicProps"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <template v-for="menu in menus">
      <transform-vnode
        :key="menu.path"
        v-if="(!menu.children || menu.meta?.hideChildrenInMenu) && !menu.meta?.hideInMenu"
        :by="customItem"
        :opt="menu"
      >
        <a-menu-item @mouseenter="$emit('itemHover', { key: menu.path })" :key="menu.path">
          <template #icon>
            <component
              v-if="menu.meta.icon !== undefined"
              :is="menu.meta.icon"
              :key="menu.meta.icon"
            />
            <component
              v-else-if="collapsed && menu.meta.collapsedIcon !== undefined"
              :is="menu.meta.collapsedIcon"
              :key="menu.meta.collapsedIcon"
            />
          </template>
          {{ t(menu.meta.title) }}
        </a-menu-item>
      </transform-vnode>
      <template v-else-if="menu.children">
        <sub-menu
          :key="menu.path"
          @itemHover="$emit('itemHover', $event)"
          :menu="menu"
          :collapsed="collapsed"
        />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import type { MenuProps, MenuTheme } from 'ant-design-vue';
import type { ComputedRef, PropType } from 'vue';
import { defineComponent, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { RouteProps } from '../typing';
import SubMenu from './sub-menu.vue';

export function useRootSubmenuKeys(menus: RouteProps[]): ComputedRef<string[]> {
  return computed(() => menus.map(it => it.path));
}

export const BaseMenuProps = {
  locale: {
    type: Boolean,
    default: false,
  },
  menus: {
    type: Array as PropType<RouteProps[]>,
    required: true,
  },
  // top-nav-header: horizontal
  mode: {
    type: String as PropType<MenuProps['mode']>,
    default: 'inline',
  },
  theme: {
    type: String as PropType<MenuTheme>,
    default: 'dark',
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
  openKeys: {
    type: Array as PropType<string[]>,
    required: true,
  },
  selectedKeys: {
    type: Array as PropType<string[]>,
    required: true,
  },
  customItem: {
    type: Function,
    default: undefined,
  },
};

export default defineComponent({
  name: 'BaseMenu',
  props: { ...BaseMenuProps },
  emits: ['update:openKeys', 'update:selectedKeys', 'mouseenter', 'mouseleave', 'itemHover'],
  setup(props, { emit }) {
    const { t } = useI18n();
    const isInline = props.mode === 'inline';
    const dynamicProps = ref({
      inlineCollapsed: isInline ? props.collapsed : undefined,
    });
    const handleOpenChange = (openKeys: string[]): void => {
      // console.log('openKeys', openKeys);
      // const latestOpenKey = openKeys.find(
      //   (key: string) => (props.openKeys as string[]).indexOf(key) === -1,
      // );
      // if ((props.menus as RouteProps[]).find(m => m.path === latestOpenKey)) {
      //   emit('update:openKeys', latestOpenKey ? [latestOpenKey] : []);
      // } else {
      //   emit('update:openKeys', openKeys);
      // }
      emit('update:openKeys', openKeys);
    };
    const handleSelect = (ctx: { [key: string]: any }): void => {
      emit('update:selectedKeys', ctx.selectedKeys);
    };
    return {
      t,
      isInline,
      dynamicProps,
      handleOpenChange,
      handleSelect,
      handleTest: () => {},
    };
  },
  components: {
    SubMenu,
  },
});
</script>
