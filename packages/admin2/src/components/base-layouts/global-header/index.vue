<template>
  <div :class="classNames">
    <span v-if="isMobile" :class="`${baseClassName}-logo`">
      <router-link :to="{ name: 'index' }">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
    </span>
    <div v-if="isMobile || collapsedButton" :class="`${baseClassName}-collapsed-button`">
      <slot name="collapsedButton">
        <menu-unfold-outlined @click="handleClick" v-if="collapsed" />
        <menu-fold-outlined @click="handleClick" v-else />
      </slot>
    </div>
    <div v-if="layout === 'mix' && !isMobile" :class="`${baseClassName}-logo`">
      <router-link :to="{ name: 'index' }">
        <img src="@/assets/logo.png" alt="logo" />
        <h1>Admin Pro</h1>
      </router-link>
    </div>
    <div :style="{ flex: 1 }">
      <slot />
    </div>
    <slot name="rightContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
    layout: {
      type: String,
      default: 'side',
    },
    theme: {
      type: String,
      default: 'dark',
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    collapsedButton: {
      type: Boolean,
      default: () => true,
    },
  },
  emits: ['collapse'],
  setup(props, { emit }) {
    const baseClassName = `${props.prefixCls}-global-header`;
    const classNames = ref({
      [baseClassName]: true,
      [`${baseClassName}-layout-${props.layout}`]: props.layout,
    });
    const isSide = computed(() => props.layout === 'side');
    const isLeft = computed(() => props.layout === 'left');
    const handleClick = (): void => {
      emit('collapse', !props.collapsed);
    };
    return {
      baseClassName,
      classNames,
      isSide,
      isLeft,

      handleClick,
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
});
</script>

<style lang="less">
@import url('./index.less');
</style>
