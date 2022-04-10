<template>
  <a-card :bordered="false">
    <a-result
      status="success"
      title="提交成功"
      subTitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
      style="margin-bottom: 16px"
    >
      <template #extra>
        <a-button type="primary">返回列表</a-button>
        <a-button>查看项目</a-button>
        <a-button>打印</a-button>
      </template>
      <a-descriptions :title="projectInfo.name">
        <a-descriptions-item label="项目 ID">
          {{ projectInfo.id }}
        </a-descriptions-item>
        <a-descriptions-item label="负责人">
          {{ projectInfo.principal }}
        </a-descriptions-item>
        <a-descriptions-item label="生效时间">
          {{ projectInfo.effectTime }}
        </a-descriptions-item>
      </a-descriptions>
      <br />
      <a-steps progressDot :direction="direction" :current="projectInfo.current">
        <template v-for="(item, index) in projectInfo.operateList" :key="item.desc">
          <a-step v-if="index <= projectInfo.current">
            <template #title>
              <span style="font-size: 14px">
                {{ item.desc }}
              </span>
            </template>
            <template #description>
              <div class="title">
                <div style="margin: 8px 0 4px">
                  {{ item.name }}
                  <template v-if="index === projectInfo.current">
                    <a href="">
                      <dingding-outlined style="margin-left: 8px; color: #00a0e9" />
                      催一下
                    </a>
                  </template>
                  <dingding-outlined v-else style="margin-left: 8px; color: #00a0e9" />
                </div>
                <div v-if="item.operateTime">{{ item.operateTime }}</div>
              </div>
            </template>
          </a-step>
          <a-step v-else>
            <template #title>
              <span style="font-size: 14px">
                {{ item.desc }}
              </span>
            </template>
          </a-step>
        </template>
        <a-step>
          <template #title>
            <span style="font-size: 14px">完成</span>
          </template>
        </a-step>
      </a-steps>
    </a-result>
  </a-card>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, inject, ref } from 'vue';
import { DingdingOutlined } from '@ant-design/icons-vue';

export interface Operator {
  name: string;
  desc?: string;
  dingTalkNum?: string;
  operateTime?: string;
}
export interface ProjectInfo {
  id: string | number;
  name: string;
  principal?: string; //负责人
  effectTime?: string; //生效时间
  current?: number; // 当前所属步骤
  operateList?: Operator[];
}

export default defineComponent({
  props: {
    projectInfo: {
      type: Object as PropType<ProjectInfo>,
      // 真实项目中，应该去掉该默认值
      default: () => {
        return {
          id: '12345',
          name: '项目名称',
          principal: 'sendya',
          effectTime: '2016-12-12 ~ 2017-12-12',
          current: 1,
          operateList: [
            {
              name: 'sendya',
              dingTalkNum: 'sendya',
              desc: '创建项目',
              operateTime: '2016-12-12 12:32',
            },
            {
              name: 'Amour1699',
              dingTalkNum: 'Amour1699',
              desc: '部门初审',
            },
            {
              name: 'zkwolf',
              dingTalkNum: 'zkwolf',
              desc: '财务复核',
            },
          ],
        };
      },
    },
  },
  setup() {
    const isMobile = inject('isMobile', ref(false));
    return {
      direction: computed(() => (isMobile.value ? 'vertical' : 'horizontal')),
    };
  },
  components: {
    DingdingOutlined,
  },
});
</script>

<style lang="less" scoped>
.title {
  position: relative;
  color: @text-color;
  font-size: 12px;
  text-align: center;
}

.head-title {
  margin-bottom: 20px;
  color: @heading-color;
  font-weight: 500px;
  font-size: 16px;
}
</style>
