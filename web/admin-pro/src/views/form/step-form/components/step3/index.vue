<template>
  <a-result status="success" title="操作成功" sub-title="预计两小时到账" class="result">
    <template #extra>
      <a-button type="primary" @click="handleFinish">再转一笔</a-button>
      <a-button>查看账单</a-button>
    </template>
    <div class="information">
      <a-descriptions :column="1">
        <a-descriptions-item label="转账账号">{{ stepFormData.payAccount }}</a-descriptions-item>
        <a-descriptions-item label="收款账户">
          {{ stepFormData.receiverAccount.number }}
        </a-descriptions-item>
        <a-descriptions-item label="收款人姓名">
          {{ stepFormData.receiverName }}
        </a-descriptions-item>
        <a-descriptions-item label="转账金额">
          <a-statistic :value="stepFormData.amount" suffix="元" />
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </a-result>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import type { FormState } from '@/views/form/step-form/model';

export default defineComponent({
  emits: ['finish'],
  setup(_, { emit }) {
    const store = useStore();

    const stepFormData = computed<FormState>(() => store.getters['stepForm/step']);

    const clearAllFormData = () => {
      return store.dispatch('stepForm/clear');
    };

    const handleFinish = (e: Event) => {
      e.preventDefault();
      clearAllFormData();
      emit('finish');
    };

    onUnmounted(() => {
      clearAllFormData();
    });

    return {
      stepFormData,

      handleFinish,
    };
  },
});
</script>

<style lang="less" scoped>
.result {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px 0 8px;
}

@media screen and (max-width: @screen-md) {
  .desc {
    padding: 0;
  }
}

.information {
  line-height: 22px;
  :deep(&.ant-row:not(:last-child)) {
    margin-bottom: 24px;
  }

  .label {
    padding-right: 8px;
    color: @heading-color;
    text-align: right;
    @media screen and (max-width: @screen-sm) {
      text-align: left;
    }
  }
}
</style>
