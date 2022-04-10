<template>
  <div :class="prefixCls">
    <template v-for="item in items" :key="item.key">
      <layout-block
        :theme="item.key"
        :checked="item.key === value"
        :disabled="item.disabled"
        :title="item.title"
        @click="
          () => {
            !item.disabled && handleChange(item.key);
          }
        "
      />
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProProvider } from '../base-layouts/pro-provider';
import type { ThemeItem } from './index.vue';
import LayoutBlock from './layout-block.vue';

export default defineComponent({
  props: {
    value: String,
    list: { type: Array as PropType<ThemeItem[]> },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const { getPrefixCls } = useProProvider();
    const prefixCls = getPrefixCls('setting-drawer-block-checbox');
    const { t } = useI18n();
    const items = computed<ThemeItem[]>(() => {
      return (
        props.list || [
          {
            key: 'side',
            title: t('app.setting.layout.side'),
          },
          {
            key: 'top',
            title: t('app.setting.layout.top'),
          },
          {
            key: 'mix',
            title: t('app.setting.layout.mix'),
          },
          {
            key: 'left',
            title: t('app.setting.layout.leftmenu'),
          },
        ]
      );
    });
    const handleChange = (key: string) => {
      emit('change', key);
    };

    return {
      items,
      prefixCls,
      handleChange,
    };
  },
  components: {
    LayoutBlock,
  },
});
</script>
