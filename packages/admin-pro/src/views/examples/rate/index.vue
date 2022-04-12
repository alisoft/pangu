<template>
  <page-container title="Rate 评分">
    <template #content>
      对评价进行展示。
      <br />
      对事物进行快速的评级操作。
    </template>
    <a-card :bordered="false">
      <a-row :gutter="32">
        <a-col :sm="24" :md="12">
          <h5>基本使用</h5>
          <div>
            <a-rate v-model:value="value" />
          </div>
        </a-col>
        <a-col :sm="24" :md="12">
          <h5>半星</h5>
          <a-rate v-model:value="value2" allow-half />
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin-top: 24px">
        <a-col :sm="24" :md="12">
          <h5>文案展现</h5>
          <a-rate v-model:value="value" :tooltips="desc" />
          <span class="ant-rate-text">{{ desc[value - 1] }}</span>
        </a-col>
        <a-col :sm="24" :md="12">
          <h5>其他字符</h5>
          <a-rate v-model:value="value1" allow-half>
            <template #character><heart-outlined /></template>
          </a-rate>
          <br />
          <a-rate v-model:value="value2" character="A" allow-half style="fontsize: 36px" />
          <br />
          <a-rate v-model:value="value3" character="好" allow-half />
          <br />
        </a-col>
      </a-row>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HeartOutlined } from '@ant-design/icons-vue';

const desc: string[] = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default defineComponent({
  name: 'RateExample',
  setup() {
    const value = ref(2);
    const value1 = ref(2);
    const value2 = ref(2.5);
    const value3 = ref(0.5);

    return {
      value,
      value1,
      value2,
      value3,

      desc,
    };
  },
  components: {
    HeartOutlined,
  },
});
</script>

<style lang="less" scoped>
h5 {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
