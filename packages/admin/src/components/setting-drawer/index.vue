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
          :value="value.navTheme"
          :list="themeList.themeList"
          @change="(val) => handleChange('theme', val)"
        />
      </body-wrapper>

      <a-divider />

      <body-wrapper key="mode" :title="t('app.setting.navigationmode')">
        <block-checkbox
          :value="value.layout"
          @change="(val) => handleChange('layout', val)"
        ></block-checkbox>
      </body-wrapper>

      <layout-change
        :contentWidth="value.contentWidth"
        :fixedHeader="value.fixedHeader"
        :fixSiderbar="value.fixSidebar"
        :layout="value.layout"
        :splitMenus="value.splitMenus"
        @change="({ type, value }) => handleChange(type, value)"
      />

      <a-divider />

      <body-wrapper :title="t('app.setting.othersettings')">
        <a-list :split="false">
          <a-list-item>
            <span style="opacity: 1">{{
              t("app.setting.transitionname")
            }}</span>
            <template #actions>
              <a-select
                size="small"
                style="width: 100px"
                :value="value.transitionName || 'null'"
                @change="(val) => handleChange('transition', val)"
              >
                <a-select-option value="null">Null</a-select-option>
                <a-select-option value="slide-fadein-up"
                  >Slide Up</a-select-option
                >
                <a-select-option value="slide-fadein-right"
                  >Slide Right</a-select-option
                >
                <a-select-option value="fadein">Fade In</a-select-option>
                <a-select-option value="zoom-fadein">Zoom</a-select-option>
              </a-select>
            </template>
          </a-list-item>

          <a-tooltip>
            <a-list-item>
              <span style="opacity: 1">{{ t("app.setting.multitab") }}</span>
              <template #actions>
                <a-switch
                  size="small"
                  :checked="value.multiTab"
                  @change="() => handleChange('multiTab', !value.multiTab)"
                />
              </template>
            </a-list-item>
          </a-tooltip>

          <a-tooltip
            placement="left"
            :title="t('app.setting.multitab.fixed.hit')"
          >
            <a-list-item>
              <span :style="{ opacity: !value.multiTab ? '0.5' : '1' }">
                {{ t("app.setting.multitab.fixed") }}
              </span>
              <template #actions>
                <a-switch
                  size="small"
                  :checked="value.multiTabFixed"
                  :disabled="!value.multiTab && !value.fixedHeader"
                  @change="
                    () => handleChange('multiTabFixed', !value.multiTabFixed)
                  "
                />
              </template>
            </a-list-item>
          </a-tooltip>

          <a-list-item>
            <span style="opacity: 0.5">{{ t("app.setting.weakmode") }}</span>
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
import PropTypes from "ant-design-vue/lib/_util/vue-types";
import { defineComponent, computed, reactive, ref } from "vue";
import { useProProvider } from "../base-layouts/pro-provider";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons-vue";
import type { ContentWidth } from "../base-layouts/typing";
import { useStore } from "vuex";
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
} from "@/store/modules/app/mutations";
import BodyWrapper from "./body-wrapper.vue";
import BlockCheckbox from "./block-checkbox.vue";
import LayoutChange from "./layout-change.vue";
import { useI18n } from "vue-i18n";
import type { LayoutBlockTheme } from "./layout-block.vue";

const iconStyle = {
  color: "#fff",
  fontSize: "20px",
};

export interface ThemeItem {
  disabled?: boolean;
  key: LayoutBlockTheme;
  url?: string;
  title: string;
}
export interface ThemeConfig {
  key: string;
  fileName?: string;
  theme: string;
  modifyVars: Record<string, any>;
}

export interface SettingProps {
  theme: "dark" | "light" | "realDrak";
  primaryColor: string;
  layout: "side" | "top" | "mix" | "left";
  colorWeak: boolean;
  contentWidth: ContentWidth;
  fixedHeader: boolean;
  fixSiderbar: boolean;
  hideHintAlert: boolean;
  hideCopyButton: boolean;
}

export const vueSettingProps = {
  theme: PropTypes.oneOf(["dark", "light", "realDark"]),
  primaryColor: PropTypes.string,
  layout: PropTypes.oneOf(["side", "top", "mix", "left"]),
  colorWeak: PropTypes.bool,
  contentWidth: PropTypes.oneOf(["Fluid", "Fixed"]).def("Fluid"),
  fixedHeader: PropTypes.bool,
  fixSiderbar: PropTypes.bool,
  hideHintAlert: PropTypes.bool.def(false),
  hideCopyButton: PropTypes.bool.def(false),
};

const getThemeList = (t: (s: string) => string) => {
  // @ts-ignoe
  // const list: ThemeConfig[] = window.antdv_pro_plugin_ant_themeVar || [];
  const list: ThemeConfig[] = [];
  const themeList: ThemeItem[] = [
    {
      key: "light",
      title: t("app.setting.pagestyle.light"),
    },
    {
      key: "dark",
      title: t("app.setting.pagestyle.dark"),
    },
    {
      key: "realDark",
      title: t("app.setting.pagestyle.realdark"),
    },
  ];

  const darkColorList = [
    {
      key: "#1890ff",
      color: "#1890ff",
      theme: "dark",
    },
  ];

  const lightColorList = [
    {
      key: "#1890ff",
      color: "#1890ff",
      theme: "dark",
    },
  ];

  if (list.find((item) => item.theme === "dark")) {
    themeList.push({
      key: "realDark",
      url: "https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg",
      title: t("app.setting.pagestyle.realdark"),
    });
  }
  // insert  theme color List
  list.forEach((item) => {
    const color = (item.modifyVars || {})["@primary-color"];
    if (item.theme === "dark" && color) {
      darkColorList.push({
        color,
        ...item,
      });
    }
    if (!item.theme || item.theme === "light") {
      lightColorList.push({
        color,
        ...item,
      });
    }
  });

  return {
    colorList: {
      dark: darkColorList,
      light: lightColorList,
    },
    themeList,
  };
};

export default defineComponent({
  name: "SettingDrawer",
  props: {
    // value: {
    //   type: Object as PropType<SettingProps>,
    //   required: true,
    // },
    getContainer: PropTypes.func,
  },
  emits: ["change"],
  setup() {
    const { getPrefixCls } = useProProvider();
    const prefixCls = getPrefixCls("setting-drawer");
    const visible = ref(false);
    const { t } = useI18n();
    const themeList = getThemeList(t);
    const store = useStore();
    const value = reactive({
      layout: computed(() => store.getters["app/layout"]),
      navTheme: computed(() => store.getters["app/navTheme"]),
      contentWidth: computed(() => store.getters["app/contentWidth"]),
      splitMenus: computed(() => store.getters["app/splitMenus"]),
      fixedHeader: computed(() => store.getters["app/fixedHeader"]),
      fixSidebar: computed(() => store.getters["app/fixedSidebar"]),
      transitionName: computed(() => store.getters["app/transitionName"]),
      multiTab: computed(() => store.getters["app/multiTab"]),
      multiTabFixed: computed(() => store.getters["app/multiTabFixed"]),
    });

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
      if (val !== "mix") {
        // 强制停止使用分割菜单
        store.commit(`app/${SET_SPLIT_MENUS}`, false);
      } else {
        // Mix 模式下，header 必须被锁定
        store.commit(`app/${SET_FIXED_HEADER}`, true);
      }
      store.commit(`app/${SET_LAYOUT}`, val);
    };

    const handleChange = (type: string, val: string | boolean) => {
      console.log("change", type, val);
      if (type === "layout") {
        updateLayoutSetting(val as string);
      } else if (type === "theme") {
        store.commit(`app/${SET_NAV_THEME}`, val);
      } else if (type === "splitmenus") {
        store.commit(`app/${SET_SPLIT_MENUS}`, val);
      } else if (type === "fixSiderbar") {
        store.commit(`app/${SET_FIXED_SIDEBAR}`, val);
      } else if (type === "fixedHeader") {
        // 关闭 header 固定时，取消 multi-tab 固定
        if (!val) {
          store.commit(`app/${SET_FIXED_MULTI_TAB}`, false);
        }
        store.commit(`app/${SET_FIXED_HEADER}`, val);
      } else if (type === "contentWidth") {
        store.commit(`app/${SET_CONTENT_WIDTH}`, val);
      } else if (type === "transition") {
        store.commit(`app/${SET_TRANSITION_NAME}`, val === "null" ? "" : val);
      } else if (type === "multiTab") {
        store.commit(`app/${SET_MULTI_TAB}`, val);
      } else if (type === "multiTabFixed") {
        if (!value.fixedHeader) {
          store.commit(`app/${SET_FIXED_HEADER}`, true);
        }
        store.commit(`app/${SET_FIXED_MULTI_TAB}`, val);
      }

      // emit('change', { type, value });
    };

    return {
      t,
      value,
      prefixCls,
      iconStyle,
      themeList,

      visible,
      setShow,
      handleChange,
      handleClickShowButton,
    };
  },
  components: {
    CloseOutlined,
    SettingOutlined,

    BodyWrapper,
    BlockCheckbox,
    LayoutChange,
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
