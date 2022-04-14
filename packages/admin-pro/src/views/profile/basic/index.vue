<template>
  <page-container :title="t('pages.profile.basic.title')">
    <a-card :bordered="false">
      <a-descriptions title="退款申请">
        <a-descriptions-item label="取货单号">1000000000</a-descriptions-item>
        <a-descriptions-item label="状态">已取货</a-descriptions-item>
        <a-descriptions-item label="销售单号">1234123421</a-descriptions-item>
        <a-descriptions-item label="子订单">3214321432</a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px" />
      <a-descriptions title="用户信息">
        <a-descriptions-item label="用户姓名">付小小</a-descriptions-item>
        <a-descriptions-item label="联系电话">18100000000</a-descriptions-item>
        <a-descriptions-item label="常用快递">菜鸟仓储</a-descriptions-item>
        <a-descriptions-item label="取货地址">浙江省杭州市西湖区万塘路18号</a-descriptions-item>
        <a-descriptions-item label="备注">无</a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px" />

      <div class="title">退货商品</div>
      <a-table
        style="margin-bottom: 24px"
        row-key="id"
        :pagination="false"
        :loading="context.loading"
        :columns="goodsColumns"
        :data-source="context.dataSource"
      >
        <template #bodyCell="{ text, column }">
          <template v-if="column.key === 'id'">
            <a>{{ text }}</a>
          </template>
        </template>
        <template #summary>
          <a-table-summary fixed>
            <a-table-summary-row>
              <a-table-summary-cell :index="0">总计</a-table-summary-cell>
              <a-table-summary-cell :index="1" :col-span="3"></a-table-summary-cell>
              <a-table-summary-cell :index="4">
                <div style="text-align: right; font-weight: bold">
                  {{ context.dataSource.reduce((pre, cur) => pre + Number(cur.num), 0) }}
                </div>
              </a-table-summary-cell>
              <a-table-summary-cell :index="5">
                <div style="text-align: right; font-weight: bold">
                  {{ context.dataSource.reduce((pre, cur) => pre + Number(cur.amount), 0) }}
                </div>
              </a-table-summary-cell>
            </a-table-summary-row>
          </a-table-summary>
        </template>
      </a-table>

      <div class="title">退货进度</div>
      <a-table
        style="margin-bottom: 24px"
        row-key="key"
        :loading="context2.loading"
        :pagination="false"
        :columns="scheduleColumns"
        :data-source="context2.dataSource"
      >
        <template #bodyCell="{ text, column }">
          <template v-if="column.key === 'status'">
            <a-badge :status="text" :text="statusMap[text]" />
          </template>
        </template>
      </a-table>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { goodsData, scheduleData } from './mockData';
import type { ReponseData } from '@/utils/hooks/useFetchData';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { useI18n } from 'vue-i18n';
import type { TableColumn } from '@/typing';

interface ListItem {
  id: string;
  name: string;
  barcode: string;
  price: string;
  num: string;
  amount: string;
}

interface ListItem2 {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
}

const statusMap = {
  processing: '进行中',
  success: '完成',
  failed: '失败',
};

const goodsColumns: TableColumn[] = [
  {
    title: '商品编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品条码',
    dataIndex: 'barcode',
    key: 'barcode',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
  },
  {
    title: '数量（件）',
    dataIndex: 'num',
    key: 'num',
    align: 'right',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right',
  },
];

const scheduleColumns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '当前进度',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作员ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '耗时',
    dataIndex: 'cost',
    key: 'cost',
  },
];

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { context } = useFetchData<ReponseData<ListItem>>(() => {
      return new Promise(resolve => {
        resolve({
          data: goodsData,
          total: 5,
        });
      });
    });
    const { context: context2 } = useFetchData<ReponseData<ListItem2>>(() => {
      return new Promise(resolve => {
        resolve({
          data: scheduleData,
          total: 5,
        });
      });
    });
    return {
      t,

      goodsColumns,
      scheduleColumns,
      statusMap,

      context,
      context2,
    };
  },
});
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 16px;
  color: @text-color;
  font-weight: 500;
  font-size: 16px;
}
</style>
