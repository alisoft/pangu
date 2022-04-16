<template>
  <setting-outlined
    v-bind="$attrs"
    class="ant-pro-dropdown ant-pro-dropdown-action"
    @click="handleSettingBtnClick"
  />
  <a-modal
    v-model:visible="state.visible"
    :width="700"
    :title="t('global.setting.title')"
    :confirm-loading="state.confirmLoading"
    @ok="handleOk"
  >
    <a-row :gutter="16">
      <a-col :span="12">
        <list label="Basic Layout">
          <list-item label="Layout Mode">
            <a-select :value="layout" @change="handleLayoutChange" style="width: 150px">
              <a-select-option value="side">Side</a-select-option>
              <a-select-option value="left">Left</a-select-option>
              <a-select-option value="top">Top</a-select-option>
              <a-select-option value="mix">Mix</a-select-option>
            </a-select>
          </list-item>
          <list-item label="Content Width">
            <a-radio-group
              :value="contentWidth"
              @change="handleContentWidthChange"
              style="width: 150px"
            >
              <a-radio-button value="Fluid">Fluid</a-radio-button>
              <a-radio-button value="Fixed">Fixed</a-radio-button>
            </a-radio-group>
          </list-item>
          <list-item label="Nav Theme">
            <a-radio-group
              :disabled="hasMix"
              :value="navTheme"
              @change="handleNavThemeChange"
              style="width: 150px"
            >
              <a-radio-button value="dark">Dark</a-radio-button>
              <a-radio-button value="light">Light</a-radio-button>
            </a-radio-group>
          </list-item>
          <list-item label="Split Menu">
            <a-switch
              checked-children="开"
              un-checked-children="关"
              :disabled="layout !== 'mix'"
              :checked="splitMenus"
              @change="handleSplitMenusChange"
            />
          </list-item>
        </list>

        <list v-if="false" label="Box">
          <list-item label="Fixed Header">
            <a-switch :checked="fixedHeader" />
          </list-item>
          <list-item label="Fixed Sidebar">
            <a-switch :checked="fixedSidebar" />
          </list-item>
        </list>

        <list label="Router Animation">
          <a-select
            :value="transitionName || 'null'"
            @change="handleChangeTransitionName"
            style="width: 200px"
          >
            <a-select-option value="null">Null</a-select-option>
            <a-select-option value="slide-fadein-up">Slide Up</a-select-option>
            <a-select-option value="slide-fadein-right">Slide Right</a-select-option>
            <a-select-option value="fadein">Fade In</a-select-option>
            <a-select-option value="zoom-fadein">Zoom</a-select-option>
          </a-select>
        </list>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { SettingOutlined } from '@ant-design/icons-vue';
import {
  SET_CONTENT_WIDTH,
  SET_LAYOUT,
  SET_NAV_THEME,
  SET_SPLIT_MENUS,
  SET_TRANSITION_NAME,
} from '@/store/modules/app/mutations';

import List from './list.vue';
import ListItem from './list-item.vue';
import type { RadioChangeEvent } from 'ant-design-vue';

export default defineComponent({
  name: 'SettingDialog',
  inheritAttrs: false,
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const state = reactive({
      visible: false,
      confirmLoading: false,
    });
    const handleOk = () => {
      state.visible = false;
    };
    const handleSettingBtnClick = () => {
      state.visible = true;
    };

    const layout = computed(() => store.getters['app/layout']);
    const navTheme = computed(() => store.getters['app/navTheme']);
    const contentWidth = computed(() => store.getters['app/contentWidth']);
    const splitMenus = computed(() => store.getters['app/splitMenus']);
    const fixedHeader = computed(() => store.getters['app/fixedHeader']);
    const fixedSidebar = computed(() => store.getters['app/fixedSidebar']);
    const transitionName = computed(() => store.getters['app/transitionName']);

    const hasMix = computed(() => layout.value === 'mix');

    const handleLayoutChange = (value: string) => {
      if (value !== 'mix') {
        // 强制停止使用分割菜单
        store.commit(`app/${SET_SPLIT_MENUS}`, false);
      } else {
        // 如果是 mix 模式，则需要将主题色设置为 dark
        store.commit(`app/${SET_NAV_THEME}`, 'dark');
      }
      store.commit(`app/${SET_LAYOUT}`, value);
    };
    const handleContentWidthChange = (e: RadioChangeEvent) => {
      const value = (e.target as HTMLInputElement).value;
      store.commit(`app/${SET_CONTENT_WIDTH}`, value);
    };
    const handleNavThemeChange = (e: RadioChangeEvent) => {
      const value = (e.target as HTMLInputElement).value;
      store.commit(`app/${SET_NAV_THEME}`, value);
    };
    const handleSplitMenusChange = (checked: boolean) => {
      store.commit(`app/${SET_SPLIT_MENUS}`, checked);
    };
    const handleChangeTransitionName = (value: string) => {
      store.commit(`app/${SET_TRANSITION_NAME}`, value === 'null' ? '' : value);
    };

    return {
      t,

      state,
      layout,
      navTheme,
      contentWidth,
      splitMenus,
      fixedHeader,
      fixedSidebar,
      transitionName,
      hasMix,

      handleOk,
      handleSettingBtnClick,

      handleLayoutChange,
      handleContentWidthChange,
      handleNavThemeChange,
      handleSplitMenusChange,
      handleChangeTransitionName,
    };
  },
  components: {
    SettingOutlined,
    List,
    ListItem,
  },
});
</script>
