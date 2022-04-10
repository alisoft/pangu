<template>
  <div :class="classNames">
    <div :class="`${prefixedClassName}-warp`">
      <a-page-header
        :breadcrumb="
          showBreadcrumb ? { routes: breadcrumb, itemRender: customBreadcrumbRender } : null
        "
        :title="title"
        :sub-title="subTitle"
        @back="handleBack"
      >
        <template v-if="hasTags" #tags>
          <slot name="tags" />
        </template>
        <template v-if="hasExtra" #extra>
          <slot name="extra" />
        </template>
        <template v-if="hasFooter || tabList.length > 0" #footer>
          <slot name="footer">
            <a-tabs v-if="tabList.length > 0" :active-key="tabActiveKey" @change="handleTabChange">
              <a-tab-pane v-for="tab in tabList" :key="tab.key" :tab="tab.tab" />
            </a-tabs>
          </slot>
        </template>
        <page-header-content v-if="hasContent || hasExtraContent" :prefix-cls="prefixedClassName">
          <template v-if="hasContent" #content>
            <slot name="content" />
          </template>
          <template v-if="hasExtraContent" #extraContent>
            <slot name="extraContent" />
          </template>
        </page-header-content>
      </a-page-header>
    </div>
    <grid-content>
      <div v-if="hasChildren" :class="`${prefixedClassName}-children-content`">
        <slot />
      </div>
    </grid-content>
  </div>
</template>
<script lang="ts">
import type { PropType, VNodeChild } from 'vue';
import { defineComponent, h, ref, toRefs, withCtx, createTextVNode } from 'vue';
import { useProProvider } from '../pro-provider';
import GridContent from '@/components/base-layouts/grid-content/index.vue';
import PageHeaderContent from './page-header-content.vue';
import { injectMenuState } from '@/layouts/use-menu-state';
import { RouterLink } from 'vue-router';

export interface Tab {
  key: string;
  tab: string | VNodeChild;
}

export interface Route {
  path: string;
  breadcrumbName: string;
  children: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

export interface BreadcrumbItemRender {
  route: Route;
  params: Record<any, any>;
  routes: Route[];
  paths: string[];
}

export default defineComponent({
  name: 'PageContainer',
  props: {
    // 注意：tabList 优先级低于 v-slot:footer
    tabList: {
      type: Array as PropType<Tab[]>,
      default: (): Tab[] => [],
    },
    // 支持 v-model:tabActiveKey
    tabActiveKey: {
      type: String,
      default: (): string | unknown => null,
    },
    title: {
      type: [String, Boolean],
      default: false,
    },
    subTitle: {
      type: [String, Boolean],
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    back: {
      type: Function as PropType<(...args: any[]) => void>,
      default: undefined,
    },
    onBack: {
      type: Function as PropType<(...args: any[]) => void>,
      default: undefined,
    },
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
    showBreadcrumb: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['tab-change', 'update:tab-active-key'],
  setup(props, { slots, emit }) {
    const config = useProProvider();
    const { breadcrumb } = injectMenuState();
    const { getPrefixCls, contentWidth } = toRefs(config);
    const prefixedClassName = getPrefixCls.value('page-container');
    const classNames = ref({
      [prefixedClassName]: true,
      [`${prefixedClassName}-ghost`]: props.ghost,
    });
    // 当未设置 back props 或未监听 @back，不显示 back
    // props 的 back 事件优先级高于 @back，需要注意
    const onBack = props.back || props.onBack;
    const handleBack = onBack || undefined;
    const handleTabChange = (activeKey: string): void => {
      emit('tab-change', activeKey);
      emit('update:tab-active-key', activeKey);
    };

    const {
      default: hasChildren,
      extra: hasExtra,
      footer: hasFooter,
      content: hasContent,
      extraContent: hasExtraContent,
      tags: hasTags,
    } = slots;

    // 自定义面包屑渲染逻辑
    const customBreadcrumbRender = ({ route, params, routes }: BreadcrumbItemRender) => {
      const breadcrumbName = route.breadcrumbName;
      return (
        (routes.indexOf(route) === routes.length - 1 &&
          h('span', null, { default: withCtx(() => [createTextVNode(breadcrumbName)]) })) ||
        h(
          RouterLink,
          { to: { path: route.path || '/', params } },
          { default: withCtx(() => [createTextVNode(breadcrumbName)]) },
        )
      );
    };

    return {
      breadcrumb,
      hasChildren,
      hasExtra,
      hasFooter,
      hasContent,
      hasExtraContent,
      hasTags,

      classNames,
      prefixedClassName,
      contentWidth,

      handleBack,
      handleTabChange,

      customBreadcrumbRender,
      config,
    };
  },
  components: {
    [GridContent.name]: GridContent,
    PageHeaderContent,
  },
});
</script>

<style lang="less">
@import url('./index.less');
</style>
