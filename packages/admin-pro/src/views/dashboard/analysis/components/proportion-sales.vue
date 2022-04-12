<template>
  <a-card
    class="salesCard"
    style="height: 100%"
    :loading="loading"
    :bordered="false"
    :title="t('dashboard.analysis.the-proportion-of-sales')"
  >
    <template #extra>
      <div class="salesCardExtra">
        <slot name="dropdownGroup" />
        <div class="salesTypeRadio">
          <a-radio-group :value="salesType" @change="handleChangeSalesType">
            <a-radio-button value="all">
              {{ t('dashboard.analysis.channel.all') }}
            </a-radio-button>
            <a-radio-button value="online">
              {{ t('dashboard.analysis.channel.online') }}
            </a-radio-button>
            <a-radio-button value="stores">
              {{ t('dashboard.analysis.channel.stores') }}
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </template>
    <div>
      <h4 style="margin-top: 8px; margin-bottom: 32px">
        {{ t('dashboard.analysis.sales') }}
      </h4>
      <pie :data="salesPieData" :height="248" />
    </div>
  </a-card>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { Pie } from './charts';
import type { SalesDataItem } from '@/api/dashboard/analysis';
import type { RadioProps } from 'ant-design-vue';

export type SalesType = 'all' | 'online' | 'stores' | string;

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    salesType: {
      type: String as PropType<SalesType>,
      required: true,
      validator: function (value: SalesType) {
        return ['all', 'online', 'stores'].indexOf(value) !== -1;
      },
    },
    salesPieData: {
      type: Array as PropType<SalesDataItem[]>,
      default: () => [],
    },
    handleChangeSalesType: {
      type: Function as PropType<RadioProps['onChange']>,
      default: () => null,
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
  components: {
    Pie,
  },
});
</script>
<style lang="less" scoped>
@import '../style.less';
</style>
