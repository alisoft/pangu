<template>
  <a-card :bordered="false" title="仓库管理">
    <a-form class="form">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="仓库名" v-bind="validateInfos.name" data-validate-id="name">
            <a-input v-model:value="modelRef.name" placeholder="请输入仓库名称" />
          </a-form-item>
        </a-col>
        <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
          <a-form-item label="仓库域名" v-bind="validateInfos.url" data-validate-id="url">
            <a-input
              v-model:value="modelRef.url"
              addon-before="http://"
              addon-after=".com"
              placeholder="请输入"
            />
          </a-form-item>
        </a-col>
        <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
          <a-form-item label="仓库管理员" v-bind="validateInfos.owner">
            <a-select v-model:value="modelRef.owner" placeholder="请选择管理员">
              <a-select-option value="王同学">王同学</a-select-option>
              <a-select-option value="李同学">李同学</a-select-option>
              <a-select-option value="黄同学">黄同学</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="审批人" v-bind="validateInfos.approver">
            <a-select v-model:value="modelRef.approver" placeholder="请选择审批员">
              <a-select-option value="王晓丽">王晓丽</a-select-option>
              <a-select-option value="李军">李军</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
          <a-form-item label="生效日期" v-bind="validateInfos.dateRange">
            <a-range-picker v-model:value="modelRef.dateRange" style="width: 100%" />
          </a-form-item>
        </a-col>
        <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
          <a-form-item label="仓库类型" v-bind="validateInfos.type">
            <a-select v-model:value="modelRef.type" placeholder="请选择仓库类型">
              <a-select-option value="公开">公开</a-select-option>
              <a-select-option value="私密">私密</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item v-if="showSubmit">
        <a-button @click="handleSubmit">Submit</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts">
import { Form } from 'ant-design-vue/lib';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'RepositoryForm',
  props: {
    showSubmit: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const validateDomain = (_rule: any, value: string) => {
      return new Promise<void>((resolve, reject) => {
        const regex = /^user-(.*)$/;
        if (!regex.test(value)) {
          reject('需要以 user- 开头');
        }
        resolve();
      });
    };

    const modelRef = reactive({
      name: undefined,
      url: undefined,
      owner: undefined,
      approver: undefined,
      dateRange: null, // as RangePickerProps['value'],
      type: undefined,
    });
    const rulesRef = reactive({
      name: [{ required: true, message: '请输入仓库名称' }],
      url: [{ required: true, validator: validateDomain }],
    });

    const { resetFields, validate, validateInfos } = Form.useForm(modelRef, rulesRef);

    const handleSubmit = (e: Event) => {
      e.preventDefault();
    };

    return {
      modelRef,
      resetFields,
      validate,
      validateInfos,
      handleSubmit,
    };
  },
});
</script>
