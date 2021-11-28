<template>
  <a-card :bordered="false" title="任务管理">
    <a-form class="task-form">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item
            label="任务名"
            v-bind="validateInfos.name2"
            data-validate-id="name2"
          >
            <a-input
              v-model:value="modelRef.name2"
              placeholder="请输入任务名称"
            />
          </a-form-item>
        </a-col>
        <a-col
          :xl="{ span: 7, offset: 1 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
        >
          <a-form-item
            label="任务描述"
            v-bind="validateInfos.url2"
            data-validate-id="url2"
          >
            <a-input
              v-model:value="modelRef.url2"
              placeholder="请输入任务描述"
            />
          </a-form-item>
        </a-col>
        <a-col
          :xl="{ span: 9, offset: 1 }"
          :lg="{ span: 10 }"
          :md="{ span: 24 }"
          :sm="24"
        >
          <a-form-item
            label="执行人"
            v-bind="validateInfos.owner2"
            data-validate-id="owner2"
          >
            <a-select
              v-model:value="modelRef.owner2"
              placeholder="请选择执行人"
            >
              <a-select-option value="黄丽丽">黄丽丽</a-select-option>
              <a-select-option value="李大刀">李大刀</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item
            label="责任人"
            v-bind="validateInfos.approver2"
            data-validate-id="approver2"
          >
            <a-select
              v-model:value="modelRef.approver2"
              placeholder="请选择责任人"
            >
              <a-select-option value="王伟">王伟</a-select-option>
              <a-select-option value="李红军">李红军</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col
          :xl="{ span: 7, offset: 1 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
        >
          <a-form-item
            label="提醒时间"
            v-bind="validateInfos.dateRange2"
            data-validate-id="dateRange2"
          >
            <a-time-picker
              v-model:value="modelRef.dateRange2"
              style="width: 100%"
            />
          </a-form-item>
        </a-col>
        <a-col
          :xl="{ span: 9, offset: 1 }"
          :lg="{ span: 10 }"
          :md="{ span: 24 }"
          :sm="24"
        >
          <a-form-item
            label="任务类型"
            v-bind="validateInfos.type2"
            data-validate-id="type2"
          >
            <a-select v-model="modelRef.type2" placeholder="请选择任务类型">
              <a-select-option value="定时执行">定时执行</a-select-option>
              <a-select-option value="周期执行">周期执行</a-select-option>
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
import { defineComponent, reactive, toRaw } from "vue";
import { useForm } from "ant-design-vue/es/form";
import { notification } from "ant-design-vue";

export default defineComponent({
  name: "TaskForm",
  props: {
    showSubmit: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const modelRef = reactive({
      name2: undefined,
      url2: undefined,
      owner2: undefined,
      approver2: undefined,
      dateRange2: undefined,
      type2: undefined,
    });
    const rulesRef = reactive({
      name2: [{ required: true, message: "请输入任务名称", whitespace: true }],
      url2: [{ required: true, message: "请输入任务描述", whitespace: true }],
      owner2: [{ required: true, message: "请选择执行人" }],
      approver2: [{ required: true, message: "请选择责任人" }],
      dateRange2: [{ required: true, message: "请选择提醒时间" }],
      type2: [{ required: true, message: "请选择任务类型" }],
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      validate().then(() => {
        notification["error"]({
          message: "Received values of form:",
          description: toRaw(modelRef),
        });
      });
    };

    return {
      modelRef,
      validate,
      validateInfos,
      resetFields,

      handleSubmit,
    };
  },
});
</script>
