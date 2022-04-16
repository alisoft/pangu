<template>
  <a-drawer
    :visible="visible"
    :width="300"
    :getContainer="getContainer"
    @close="() => setShow(false)"
    style="z-index: 99"
    placement="right"
  >
    <template #handle>
      <div :class="`${prefixCls}-handle`" @click="handleClickShowButton">
        <close-outlined v-if="visible" :style="iconStyle" />
        <setting-outlined v-else :style="iconStyle" />
      </div>
    </template>

    <div :class="`${prefixCls}-content`">
      <body-wrapper key="pageStyle" :title="t('app.setting.pagestyle')">
        <block-checkbox
          :value="navTheme"
          :list="themeList.themeList"
          @change="val => handleChange('theme', val)"
        />
      </body-wrapper>

      <body-wrapper key="themeColor" :title="t('app.setting.themecolor')">
        <theme-color
          :value="genStringToTheme(primaryColor)"
          :colorList="themeList.colorList"
          @change="val => handleChange('primaryColor', val)"
        />
      </body-wrapper>

      <a-divider />

      <body-wrapper key="mode" :title="t('app.setting.navigationmode')">
        <block-checkbox
          :value="layout"
          @change="val => handleChange('layout', val)"
        ></block-checkbox>
      </body-wrapper>

      <layout-change
        :contentWidth="contentWidth"
        :fixedHeader="fixedHeader"
        :fixSiderbar="fixSidebar"
        :layout="layout"
        :splitMenus="splitMenus"
        @change="({ type, value }) => handleChange(type, value)"
      />

      <a-divider />

      <body-wrapper :title="t('app.setting.othersettings')">
        <a-list :split="false">
          <a-list-item>
            <span style="opacity: 1">{{ t('app.setting.transitionname') }}</span>
            <template #actions>
              <a-select
                size="small"
                style="width: 100px"
                :value="transitionName || 'null'"
                @change="val => handleChange('transition', val)"
              >
                <a-select-option value="null">Null</a-select-option>
                <a-select-option value="slide-fadein-up">Slide Up</a-select-option>
                <a-select-option value="slide-fadein-right">Slide Right</a-select-option>
                <a-select-option value="fadein">Fade In</a-select-option>
                <a-select-option value="zoom-fadein">Zoom</a-select-option>
              </a-select>
            </template>
          </a-list-item>

          <a-tooltip>
            <a-list-item>
              <span style="opacity: 1">{{ t('app.setting.multitab') }}</span>
              <template #actions>
                <a-switch
                  size="small"
                  :checked="multiTab"
                  @change="() => handleChange('multiTab', !multiTab)"
                />
              </template>
            </a-list-item>
          </a-tooltip>

          <a-tooltip placement="left" :title="t('app.setting.multitab.fixed.hit')">
            <a-list-item>
              <span :style="{ opacity: !multiTab ? '0.5' : '1' }">
                {{ t('app.setting.multitab.fixed') }}
              </span>
              <template #actions>
                <a-switch
                  size="small"
                  :checked="multiTabFixed"
                  :disabled="!multiTab && !fixedHeader"
                  @change="() => handleChange('multiTabFixed', !multiTabFixed)"
                />
              </template>
            </a-list-item>
          </a-tooltip>

          <a-list-item>
            <span style="opacity: 0.5">{{ t('app.setting.weakmode') }}</span>
            <template #actions>
              <a-switch size="small" :checked="false" :disabled="true" />
            </template>
          </a-list-item>
        </a-list>
      </body-wrapper>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, computed, ref, watch } from 'vue';
import { useProProvider } from '../base-layouts/pro-provider';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { ContentWidth } from '../base-layouts/typing';
import { useStore } from 'vuex';
import {
  SET_CONTENT_WIDTH,
  SET_LAYOUT,
  SET_NAV_THEME,
  SET_SPLIT_MENUS,
  SET_TRANSITION_NAME,
  SET_FIXED_HEADER,
  SET_FIXED_SIDEBAR,
  SET_MULTI_TAB,
  SET_FIXED_MULTI_TAB,
  SET_PRIMARY_COLOR,
} from '@/store/modules/app/mutations';
import BodyWrapper from './body-wrapper.vue';
import BlockCheckbox from './block-checkbox.vue';
import LayoutChange from './layout-change.vue';
import { useI18n } from 'vue-i18n';
import type { LayoutBlockTheme } from './layout-block.vue';
import type { SelectProps } from 'ant-design-vue';
import { genStringToTheme, updateTheme } from './util';
import ThemeColor from './theme-color.vue';

const iconStyle = {
  color: '#fff',
  fontSize: '20px',
};

export interface ThemeItem {
  disabled?: boolean;
  key: LayoutBlockTheme;
  url?: string;
  title: string;
}

export interface SettingState {
  theme: 'dark' | 'light' | 'realDark';
  primaryColor: string;
  layout: 'side' | 'top' | 'mix' | 'left';
  colorWeak: boolean;
  splitMenus: boolean;
  contentWidth: ContentWidth;
  fixedHeader: boolean;
  fixSiderbar: boolean;
  hideHintAlert: boolean;
  hideCopyButton: boolean;
  transitionName: string;
  multiTab: boolean;
  multiTabFixed: boolean;
}

const getThemeList = (t: (s: string) => string) => {
  const colorList = [
    { key: 'daybreak', color: '#1890ff' },
    { key: 'dust', color: '#F5222D' },
    { key: 'volcano', color: '#FA541C' },
    { key: 'sunset', color: '#FAAD14' },
    { key: 'cyan', color: '#13C2C2' },
    { key: 'green', color: '#52C41A' },
    { key: 'geekblue', color: '#2F54EB' },
    { key: 'purple', color: '#722ED1' },
  ];
  const themeList: ThemeItem[] = [
    {
      key: 'light',
      title: t('app.setting.pagestyle.light'),
    },
    {
      key: 'dark',
      title: t('app.setting.pagestyle.dark'),
    },
    {
      key: 'realDark',
      title: t('app.setting.pagestyle.realdark'),
    },
  ];

  return {
    colorList,
    themeList,
  };
};

export default defineComponent({
  name: 'SettingDrawer',
  props: {
    // value: {
    //   type: Object as PropType<SettingProps>,
    //   required: true,
    // },
    getContainer: Function as PropType<(node: HTMLElement) => HTMLElement>,
  },
  emits: ['change'],
  setup() {
    const { getPrefixCls } = useProProvider();
    const prefixCls = getPrefixCls('setting-drawer');
    const visible = ref(false);
    const { t } = useI18n();
    const themeList = getThemeList(t);
    const store = useStore();
    const layout = computed<SettingState['layout']>(() => store.getters['app/layout']);
    const navTheme = computed<SettingState['theme']>(() => store.getters['app/navTheme']);
    const primaryColor = computed<SettingState['primaryColor']>(
      () => store.getters['app/primaryColor'],
    );
    const contentWidth = computed<SettingState['contentWidth']>(
      () => store.getters['app/contentWidth'],
    );
    const splitMenus = computed<SettingState['splitMenus']>(() => store.getters['app/splitMenus']);
    const fixedHeader = computed<SettingState['fixedHeader']>(
      () => store.getters['app/fixedHeader'],
    );
    const fixSidebar = computed<SettingState['fixSiderbar']>(
      () => store.getters['app/fixedSidebar'],
    );
    const transitionName = computed<SettingState['transitionName']>(
      () => store.getters['app/transitionName'],
    );
    const multiTab = computed<SettingState['multiTab']>(() => store.getters['app/multiTab']);
    const multiTabFixed = computed<SettingState['multiTabFixed']>(
      () => store.getters['app/multiTabFixed'],
    );
    watch(
      [navTheme, primaryColor],
      () => {
        updateTheme(navTheme.value === 'realDark', primaryColor.value);
      },
      { immediate: true },
    );
    const setShow = (flag: boolean) => {
      visible.value = flag;
    };

    const handleClickShowButton = (e: Event) => {
      // 组件库内部会劫持，导致触发两遍，做一下判断，组件库修复后可去除判断
      if (e) {
        visible.value = !visible.value;
      }
    };
    const updateLayoutSetting = (val: string) => {
      if (val !== 'mix') {
        // 强制停止使用分割菜单
        store.commit(`app/${SET_SPLIT_MENUS}`, false);
      } else {
        // Mix 模式下，header 必须被锁定
        store.commit(`app/${SET_FIXED_HEADER}`, true);
      }
      store.commit(`app/${SET_LAYOUT}`, val);
    };

    const handleChange = (type: string, val: string | boolean | SelectProps['value']) => {
      console.log('change', type, val);
      if (type === 'layout') {
        updateLayoutSetting(val as string);
      } else if (type === 'theme') {
        store.commit(`app/${SET_NAV_THEME}`, val);
      } else if (type === 'primaryColor') {
        store.commit(`app/${SET_PRIMARY_COLOR}`, val);
      } else if (type === 'splitmenus') {
        store.commit(`app/${SET_SPLIT_MENUS}`, val);
      } else if (type === 'fixSiderbar') {
        store.commit(`app/${SET_FIXED_SIDEBAR}`, val);
      } else if (type === 'fixedHeader') {
        // 关闭 header 固定时，取消 multi-tab 固定
        if (!val) {
          store.commit(`app/${SET_FIXED_MULTI_TAB}`, false);
        }
        store.commit(`app/${SET_FIXED_HEADER}`, val);
      } else if (type === 'contentWidth') {
        store.commit(`app/${SET_CONTENT_WIDTH}`, val);
      } else if (type === 'transition') {
        store.commit(`app/${SET_TRANSITION_NAME}`, val === 'null' ? '' : val);
      } else if (type === 'multiTab') {
        store.commit(`app/${SET_MULTI_TAB}`, val);
      } else if (type === 'multiTabFixed') {
        if (!fixedHeader.value) {
          store.commit(`app/${SET_FIXED_HEADER}`, true);
        }
        store.commit(`app/${SET_FIXED_MULTI_TAB}`, val);
      }

      // emit('change', { type, value });
    };

    return {
      t,
      layout,
      navTheme,
      primaryColor,
      contentWidth,
      splitMenus,
      fixedHeader,
      fixSidebar,
      transitionName,
      multiTab,
      multiTabFixed,
      prefixCls,
      iconStyle,
      themeList,
      genStringToTheme,
      visible,
      setShow,
      handleChange,
      handleClickShowButton,
    };
  },
  components: {
    CloseOutlined,
    SettingOutlined,
    ThemeColor,
    BodyWrapper,
    BlockCheckbox,
    LayoutChange,
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
