<template>
  <template v-if="cacheListLength">
    <div class="ant-pro-multi-tab-fixed" v-if="fixed"></div>
    <a-tabs
      type="editable-card"
      v-bind="$attrs"
      :activeKey="activeKey"
      :style="{
        margin: 0,
        paddingTop: '6px',
        width: sideWidth,
      }"
      hide-add
      :class="{ 'ant-pro-multi-tab-wrap': true, 'ant-pro-multi-tab-wrap-fixed': fixed }"
      @change="handleActiveKeyChange"
    >
      <template #rightExtra>
        <a-dropdown placement="bottomRight">
          <ellipsis-outlined
            :rotate="90"
            class="ant-dropdown-link ant-pro-multi-tab-dropdown-menu-btn"
          />
          <template #overlay>
            <a-menu>
              <a-menu-item
                key="close-other"
                @click="closeOther(route.path)"
                :disabled="cacheListLength === 1"
              >
                关闭其他
              </a-menu-item>
              <a-menu-item key="refresh" @click="handleReloadPage()">刷新当前页</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
      <a-tab-pane
        class="contextmenu-wrap"
        :key="item.route.path"
        v-for="(item, index) in store.cacheList"
        :closable="false"
      >
        <template #tab>
          <a-dropdown :trigger="['contextmenu']">
            <span class="ant-pro-multi-tab-title">
              {{ item.tabTitle ? t(`${item.tabTitle}`) : t(`${item.route.meta.title}`) }}
              <reload-outlined
                key="reload"
                v-if="store.current === item.route.path"
                class="ant-pro-multi-tab-reload-btn"
                @click="handleReloadPage(item.route.path)"
                :spin="spin"
              />
              <close-outlined
                key="close"
                v-if="cacheListLength > 1 && !item.lock"
                class="ant-pro-multi-tab-close-btn"
                @click="e => handleClose(e, item.route.path)"
              />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  :disabled="cacheListLength === 1"
                  key="close-other"
                  @click="closeOther(item.route.path)"
                >
                  关闭其他
                </a-menu-item>
                <a-menu-item
                  key="close-left"
                  :disabled="index === 0"
                  @click="closeLeft(item.route.path)"
                >
                  关闭到左侧
                </a-menu-item>
                <a-menu-item
                  :disabled="index + 1 === cacheListLength"
                  key="close-right"
                  @click="closeRight(item.route.path)"
                >
                  关闭到右侧
                </a-menu-item>
                <a-menu-item @click="handleReloadPage(item.route.path)">刷新当前页</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from 'vue';
import { ReloadOutlined, EllipsisOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { injectMultiTabStore, useMultiTab } from './multi-tab-store';
import { injectMenuState } from '@/layouts/use-menu-state';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MultiTab',
  inheritAttrs: false,
  props: {
    fixed: {
      type: Boolean,
      default: () => false,
    },
    defaultHomePage: {
      type: String,
      default: () => '/dashboard/analysis',
    },
  },
  setup(props) {
    const menuState = injectMenuState();
    const store = injectMultiTabStore();
    const cacheListLength = computed(() => (store ? store.cacheList.length : 0));
    const route = useRoute();
    const activeKey = computed(() => {
      return (
        menuState.selectedKeys &&
        menuState.selectedKeys.value[menuState.selectedKeys.value.length - 1]
      );
    });
    const isMobile = inject('isMobile', ref(false));
    const sideWidth = computed(
      () =>
        (menuState.sideWidth &&
          menuState.sideWidth.value &&
          !isMobile.value &&
          props.fixed &&
          `calc(100% - ${menuState.sideWidth.value}px)`) ||
        '100%',
    );
    const { t } = useI18n();
    const spin = ref(false);
    const [{ refresh, close, closeLeft, closeRight, closeOther }] =
      useMultiTab(/*{ defaultHomePage: props.defaultHomePage }*/);

    const handleActiveKeyChange = (key: string) => {
      menuState.selectedKeys!.value = [key];
    };
    const handleReloadPage = async (key?: string) => {
      spin.value = true;
      await refresh(key);
      spin.value = false;
    };

    const handleClose = (e: Event, target: string) => {
      close(target);
      e.stopPropagation();
    };

    return {
      t,
      activeKey,
      handleActiveKeyChange,
      handleReloadPage,
      closeLeft,
      closeRight,
      closeOther,
      handleClose,
      spin,
      sideWidth,
      cacheListLength,
      route,
      store,
    };
  },
  components: {
    ReloadOutlined,
    EllipsisOutlined,
    CloseOutlined,
  },
});
</script>

<style lang="less" scoped>
@import '../base-layouts/basic-layout.less';

@multi-tab-height: 62px;
.ant-pro-multi-tab-wrap {
  background: @component-background;
}
.ant-pro-multi-tab-wrap :deep(.ant-tabs-nav) {
  padding-left: 16px;
  .ant-tabs-tab {
    padding: 0;
    > div {
      display: flex;
    }
    .ant-pro-multi-tab-reload-btn {
      margin-right: 0;
      margin-left: 8px;
      color: @text-color-secondary;
      font-size: 12px;

      &:hover {
        color: @primary-color;
      }
    }
    .ant-pro-multi-tab-close-btn {
      margin-right: 0;
      margin-left: 8px;
      color: @text-color-secondary;
      font-size: 12px;
    }
  }
  .ant-pro-multi-tab-title {
    padding: 0 16px;
  }
}
.ant-pro-multi-tab-fixed {
  width: 100%;
  height: @multi-tab-height;
  background: transparent;
}
.ant-pro-multi-tab-wrap-fixed {
  position: fixed;
  top: @pro-layout-header-height;
  right: 0;
  z-index: 9;
  width: 100%;
  height: @multi-tab-height;
  transition: width 0.2s;
}
.ant-pro-multi-tab-dropdown-menu-btn {
  margin-right: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: @primary-color;
  }
}
</style>
