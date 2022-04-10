<template>
  <div class="steps" layout="horizontal">
    <a-alert
      closable
      show-icon
      message="确认转账后，资金将直接打入对方账户，无法退回。"
      style="margin-bottom: 24px"
    />
    <a-form class="step-form" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
      <a-descriptions :column="1">
        <a-descriptions-item label="转账账号">
          {{ savedStepForm.payAccount }}
        </a-descriptions-item>
        <a-descriptions-item label="收款账户">
          {{ savedStepForm.receiverAccount.number }}
        </a-descriptions-item>
        <a-descriptions-item label="收款人姓名">
          {{ savedStepForm.receiverName }}
        </a-descriptions-item>
        <a-descriptions-item label="转账金额">
          <a-statistic :value="savedStepForm.amount" suffix="元" />
        </a-descriptions-item>
      </a-descriptions>

      <a-divider style="margin: 24px 0" />
      <a-form-item label="支付密码" v-bind="validateInfos.password">
        <a-input
          v-model:value="modelRef.password"
          autocomplete="off"
          style="width: 80%"
          type="password"
          placeholder="请输入付款密码"
        />
      </a-form-item>
      <a-form-item
        style="margin-bottom: 8px"
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: {
            span: 19,
            offset: 5,
          },
        }"
        label=""
      >
        <a-button type="primary" :loading="state.loading" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left: 8px" @click="handlePrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { useStore } from 'vuex';
// require defined typo
import type { FormState } from '../../model';

export default defineComponent({
  emits: ['next-step', 'prev'],
  setup(_, { emit }) {
    const store = useStore();

    const savedStepForm = computed<FormState>(() => store.getters['stepForm/step']);

    const state = reactive({
      loading: false,
    });
    const modelRef = reactive({
      password: undefined,
    });
    const rulesRef = reactive({
      password: [{ required: true, message: '需要支付密码才能进行支付' }],
    });

    const { resetFields, validate, validateInfos } = Form.useForm(modelRef, rulesRef);
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      state.loading = true;

      validate()
        .then(() => {
          const password = toRaw(modelRef).password;

          store
            .dispatch('stepForm/submitStepForm', {
              ...savedStepForm.value,
              password,
            })
            .then(() => {
              emit('next-step');
            })
            .finally(() => {
              state.loading = true;
            });
        })
        .catch(err => {
          state.loading = false;
          console.error('err', err);
          console.warn('validateInfos', toRaw(validateInfos));
        });
    };
    const handlePrev = (e: Event) => {
      e.preventDefault();
      emit('prev');
      // router.push('/form/step-form/info');
    };

    return {
      state,

      savedStepForm,

      modelRef,
      validateInfos,
      resetFields,

      handleSubmit,
      handlePrev,
    };
  },
});
</script>

<style lang="less" scoped>
@import '../index.less';
</style>
