<template>
  <div class="step1">
    <a-form
      layout="horizontal"
      class="step-form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
    >
      <a-form-item label="付款账户" v-bind="validateInfos.payAccount">
        <a-select v-model:value="modelRef.payAccount" placeholder="ant-design@alipay.com">
          <a-select-option value="ant-design@alipay.com">ant-design@alipay.com</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="收款账户" v-bind="validateInfos.receiverAccount">
        <receiver-account
          v-model="modelRef.receiverAccount"
          :select-style="{ width: '100px' }"
          :input-style="{ width: 'calc(100% - 100px)' }"
        />
      </a-form-item>
      <a-form-item label="收款人姓名" v-bind="validateInfos.receiverName">
        <a-input v-model:value="modelRef.receiverName" placeholder="请输入收款人姓名" />
      </a-form-item>
      <a-form-item label="转账金额" v-bind="validateInfos.amount">
        <a-input v-model:value="modelRef.amount" prefix="￥" placeholder="请输入金额" />
      </a-form-item>
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 19, offset: 5 },
        }"
      >
        <a-button type="primary" @click="handleSubmit">下一步</a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc">
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { useStore } from 'vuex';
import type { ReceiverAccountType } from '../receiver-account.vue';
import ReceiverAccount from '../receiver-account.vue';
import type { FormState } from '../../model';

export default defineComponent({
  emits: ['next-step'],
  setup(_, { emit }) {
    const store = useStore();

    const savedStepForm: FormState = toRaw(store.getters['stepForm/step']);

    const modelRef = reactive({
      payAccount: savedStepForm.payAccount,
      receiverAccount: {
        ...savedStepForm.receiverAccount,
      },
      receiverName: savedStepForm.receiverName,
      amount: savedStepForm.amount,
    });

    const receiverAccount = (_rule: any, value: ReceiverAccountType) => {
      return new Promise<string | void>((resolve, reject) => {
        const checkValue = toRaw(value);
        if (checkValue && checkValue.number) {
          resolve();
        } else {
          reject('请输入收款账号');
        }
      });
    };

    const rulesRef = reactive({
      payAccount: [{ required: true, message: '请选择付款账户' }],
      receiverAccount: [
        {
          required: true,
          validator: receiverAccount,
          trigger: 'change',
        },
      ],
      receiverName: [{ required: true, message: '请输入收款人姓名' }],
      amount: [
        {
          required: true,
          message: '请输入转账金额',
        },
        {
          pattern: /^(\d+)((?:\.\d+)?)$/,
          message: '请输入合法金额数字',
        },
      ],
    });

    const { resetFields, validate, validateInfos } = Form.useForm(modelRef, rulesRef);
    const handleSubmit = (e: Event) => {
      e.preventDefault();

      validate()
        .then(() => {
          store.dispatch('stepForm/saveStepFormData', toRaw(modelRef)).then(() => {
            emit('next-step');
          });

          // store.commit({
          //   type: 'stepForm/saveStepFormData',
          //   payload: toRaw(modelRef),
          // });
        })
        .catch(err => {
          console.error('err', err);
          console.warn('validateInfos', toRaw(validateInfos));
        });
    };
    return {
      modelRef,
      validateInfos,
      resetFields,
      handleSubmit,
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
    };
  },
  components: {
    ReceiverAccount,
  },
});
</script>

<style lang="less" scoped>
@import '../index.less';
</style>
