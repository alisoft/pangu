<template>
  <a-list :split="false">
    <a-tooltip>
      <a-list-item>
        <span :style="{ opacity: 1 }">
          {{ t('app.setting.content-width') }}
        </span>
        <template #actions>
          <a-select
            size="small"
            :value="contentWidth"
            @select="val => handleChange('contentWidth', val)"
          >
            <a-select-option v-if="layout === 'side'" value="Fixed">
              {{ t('app.setting.content-width.fixed') }}
            </a-select-option>
            <a-select-option value="Fluid">
              {{ t('app.setting.content-width.fluid') }}
            </a-select-option>
          </a-select>
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip placement="left" :title="layout === 'mix' ? t('app.setting.fixedheader.hint') : ''">
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t('app.setting.fixedheader') }}</span>
        <template #actions>
          <a-switch
            size="small"
            :checked="!!fixedHeader"
            :disabled="layout === 'mix'"
            @change="checked => handleChange('fixedHeader', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip :title="layout === 'top' ? t('app.setting.fixedsidebar.hint') : ''">
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t('app.setting.fixedsidebar') }}</span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout === 'top'"
            :checked="!!fixSiderbar"
            @change="checked => handleChange('fixSiderbar', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip placement="left" :title="layout === 'mix' ? '' : t('app.setting.layout.mix.hint')">
      <a-list-item>
        <span :style="{ opacity: 1 }">{{ t('app.setting.split.menus') }}</span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout !== 'mix'"
            :checked="!!splitMenus"
            @change="checked => handleChange('splitmenus', checked)"
          />
        </template>
      </a-list-item>
    </a-tooltip>
  </a-list>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    contentWidth: { type: String as PropType<'Fluid' | 'Fixed'>, default: 'Fluid' },
    fixedHeader: Boolean,
    fixSiderbar: Boolean,
    splitMenus: Boolean,
    layout: { type: String as PropType<'side' | 'top' | 'mix' | 'left'> },
    onChange: Function as PropType<(arg: { type: string; value: string }) => void>,
  },
  setup(_props, { emit }) {
    const { t } = useI18n();
    const handleChange = (type: string, value: any) => {
      emit('change', { type, value });
    };

    return {
      t,
      handleChange,
    };
  },
});
</script>
