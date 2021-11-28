<template>
  <a-list :split="false">
    <a-tooltip>
      <a-list-item>
        <span :style="{ opacity: 1 }">
          {{ t("app.setting.content-width") }}
        </span>
        <template #actions>
          <a-select
            size="small"
            :value="contentWidth"
            @select="(val) => handleChange('contentWidth', val)"
          >
            <a-select-option v-if="layout === 'side'" value="Fixed">
              {{ t("app.setting.content-width.fixed") }}
            </a-select-option>
            <a-select-option value="Fluid">
              {{ t("app.setting.content-width.fluid") }}
            </a-select-option>
          </a-select>
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'mix' ? t('app.setting.fixedheader.hint') : ''"
    >
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t("app.setting.fixedheader") }}</span>
        <template #actions>
          <a-switch
            size="small"
            :checked="!!fixedHeader"
            :disabled="layout === 'mix'"
            @change="(checked) => handleChange('fixedHeader', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      :title="layout === 'top' ? t('app.setting.fixedsidebar.hint') : ''"
    >
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t("app.setting.fixedsidebar") }}</span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout === 'top'"
            :checked="!!fixSiderbar"
            @change="(checked) => handleChange('fixSiderbar', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'mix' ? '' : t('app.setting.layout.mix.hint')"
    >
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t("app.setting.split.menus") }}</span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout !== 'mix'"
            :checked="!!splitMenus"
            @change="(checked) => handleChange('splitmenus', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>
  </a-list>
</template>

<script lang="ts">
import PropTypes from "ant-design-vue/es/_util/vue-types";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    contentWidth: PropTypes.oneOf(["Fluid", "Fixed"]).def("Fluid"),
    fixedHeader: PropTypes.bool,
    fixSiderbar: PropTypes.bool,
    splitMenus: PropTypes.bool,
    layout: PropTypes.oneOf(["side", "top", "mix", "left"]),
  },
  setup(_props, { emit }) {
    const { t } = useI18n();
    const handleChange = (type: string, value: string) => {
      emit("change", { type, value });
    };

    return {
      t,
      handleChange,
    };
  },
});
</script>
