<template>
  <a-sub-menu v-if="!menu.meta?.hideInMenu" :key="menu.path">
    <template #icon>
      <component v-if="menu.meta.icon !== undefined" :is="menu.meta.icon" :key="menu.meta.icon" />
      <component
        v-else-if="collapsed && menu.meta.collapsedIcon !== undefined"
        :is="menu.meta.collapsedIcon"
        :key="menu.meta.collapsedIcon"
      />
    </template>
    <template #title>
      {{ t(menu.meta.title) }}
    </template>
    <template v-for="child in menu.children">
      <a-menu-item
        @mouseenter="$emit('itemHover', { key: child.path })"
        v-if="(!child.children || child.meta?.hideChildrenInMenu) && !child.meta?.hideInMenu"
        :key="child.path"
      >
        <template #icon>
          <component
            v-if="child.meta.icon !== undefined"
            :is="child.meta.icon"
            :key="child.meta.icon"
          />
          <component
            v-else-if="collapsed && child.meta.collapsedIcon !== undefined"
            :is="child.meta.collapsedIcon"
            :key="child.meta.collapsedIcon"
          />
        </template>
        {{ t(child.meta.title) }}
      </a-menu-item>
      <template v-else>
        <sub-menu :menu="child" :key="child.path" :collapsed="collapsed" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import type { RouteProps } from '../typing';

export interface SubMenuProps {
  menu: RouteProps;
}

export default defineComponent({
  name: 'SubMenu',
  emits: ['itemHover'],
  props: {
    menu: {
      type: Object,
      required: true,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style scoped></style>
