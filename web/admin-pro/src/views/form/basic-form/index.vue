<template>
  <page-container :title="t(`${route.meta.title}`)">
    <template #content>
      {{ t('form.basicform.basic.description') }}
    </template>
    <a-card :bordered="false">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item :label="t('form.basicform.title.label')" v-bind="validateInfos.title">
          <a-input
            v-model:value="modelRef.title"
            :placeholder="t('form.basicform.title.placeholder')"
          />
        </a-form-item>
        <a-form-item :label="t('form.basicform.date.label')" v-bind="validateInfos.date">
          <a-range-picker
            v-model:value="modelRef.date"
            :placeholder="[
              t('form.basicform.placeholder.start'),
              t('form.basicform.placeholder.end'),
            ]"
            :style="{ width: '100%' }"
          />
        </a-form-item>
        <a-form-item :label="t('form.basicform.goal.label')" v-bind="validateInfos.goal">
          <a-textarea
            v-model:value="modelRef.goal"
            :placeholder="t('form.basicform.goal.placeholder')"
            :style="{ minHeight: 32 }"
            :rows="4"
          />
        </a-form-item>
        <a-form-item :label="t('form.basicform.standard.label')" v-bind="validateInfos.standard">
          <a-textarea
            v-model:value="modelRef.standard"
            :placeholder="t('form.basicform.standard.placeholder')"
            :style="{ minHeight: 32 }"
            :rows="4"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.client">
          <template #label>
            <span>{{ t('form.basicform.client.label') }}</span>
            <em class="optional">
              {{ t('form.basicform.form.optional') }}
              <a-tooltip :title="t('form.basicform.label.tooltip')">
                <info-circle-outlined />
              </a-tooltip>
            </em>
          </template>
          <a-input
            v-model:value="modelRef.client"
            :placeholder="t('form.basicform.client.placeholder')"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.invites">
          <template #label>
            <span>{{ t('form.basicform.invites.label') }}</span>
            <em class="optional">
              {{ t('form.basicform.form.optional') }}
            </em>
          </template>
          <a-input
            v-model:value="modelRef.invites"
            :placeholder="t('form.basicform.invites.placeholder')"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.weight">
          <template #label>
            <span>{{ t('form.basicform.weight.label') }}</span>
            <em class="optional">
              {{ t('form.basicform.form.optional') }}
            </em>
          </template>
          <a-input
            v-model="modelRef.weight"
            :placeholder="t('form.basicform.weight.placeholder')"
          />
        </a-form-item>
        <a-form-item :label="t('form.basicform.public.label')" v-bind="validateInfos.public">
          <div>
            <a-radio-group v-model:value="modelRef.public">
              <a-radio value="1">{{ t('form.basicform.radio.public') }}</a-radio>
              <a-radio value="2">{{ t('form.basicform.radio.partially-public') }}</a-radio>
              <a-radio value="3">{{ t('form.basicform.radio.private') }}</a-radio>
            </a-radio-group>
            <a-form-item :style="{ marginBottom: 0 }" v-bind="validateInfos.publicUsers">
              <div
                :style="{
                  margin: '8px 0',
                  display: modelRef.public === '2' ? 'block' : 'none',
                }"
              >
                <a-select
                  v-model:value="modelRef.publicUsers"
                  mode="multiple"
                  :placeholder="t('form.basicform.publicUsers.placeholder')"
                >
                  <a-select-option value="1">{{ t('form.basicform.option.A') }}</a-select-option>
                  <a-select-option value="2">{{ t('form.basicform.option.B') }}</a-select-option>
                  <a-select-option value="3">{{ t('form.basicform.option.C') }}</a-select-option>
                </a-select>
                <span>{{ t('form.basicform.label.help') }}</span>
              </div>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item
          v-bind="{
            wrapperCol: {
              xs: { span: 24, offset: 0 },
              sm: { span: 10, offset: 7 },
            },
          }"
          :style="{ marginTop: 32 }"
        >
          <a-space>
            <a-button type="primary" :loading="state.submitting" @click="handleSubmit">
              {{ t('form.basicform.form.submit') }}
            </a-button>
            <a-button @click="saveFormData">{{ t('form.basicform.form.save') }}</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { defineComponent, reactive, toRaw } from 'vue';
import { useI18n } from 'vue-i18n';
import { localStorage } from '@/utils/local-storage';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
import { Form, message } from 'ant-design-vue/lib';
import type { ResponseBody } from '@/api/typing';
import type { BasicFormResponse } from '@/api/form/basic-form';
import { saveBasicFormData } from '@/api/form/basic-form';
import type { RangePickerProps } from 'ant-design-vue/lib/vc-picker/RangePicker';

const LOCAL_SAVE_BASIC_FORM_DATA_KEY = 'LOCAL_SAVE_BASIC_FORM_DATA';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const state = reactive({
      submitting: false,
    });
    // check local save
    let formData: Record<string, any> = {};
    const localFormData = localStorage.get(LOCAL_SAVE_BASIC_FORM_DATA_KEY);
    if (localFormData !== undefined) {
      formData = JSON.parse(localFormData);
      if (formData.date) {
        formData.date = [dayjs(formData.date[0]), dayjs(formData.date[1])];
      }
    }

    const modelRef = reactive({
      title: undefined,
      date: null as RangePickerProps<Dayjs>['value'],
      goal: undefined,
      standard: undefined,
      client: undefined,
      invites: undefined,
      weight: null,
      public: '1',
      publicUsers: [],
      ...formData,
    });
    const rulesRef = reactive({
      title: [{ required: true, message: () => t('form.basicform.title.required') }],
      date: [{ required: true, message: () => t('form.basicform.date.required') }],
      goal: [{ required: true, message: () => t('form.basicform.goal.required') }],
      standard: [{ required: true, message: () => t('form.basicform.standard.required') }],
    });

    const { resetFields, validate, validateInfos } = Form.useForm(modelRef, rulesRef);
    const handleSubmit = (e: Event): void => {
      e.preventDefault();
      state.submitting = true;
      validate()
        .then(() => {
          saveBasicFormData({
            title: modelRef.title,
            date: [
              dayjs(modelRef.date[0]).format('YYYY-MM-DD hh:mm:ss'),
              dayjs(modelRef.date[1]).format('YYYY-MM-DD hh:mm:ss'),
            ],
            goal: modelRef.goal,
            standard: modelRef.standard,
          }).then((res: ResponseBody<BasicFormResponse>) => {
            state.submitting = false;
            message.success(t(res.message));
            // submit form succeed, remove save form data
            localStorage.remove(LOCAL_SAVE_BASIC_FORM_DATA_KEY);
          });
        })
        .catch(err => {
          console.error('catch::validateInfos', err, toRaw(validateInfos));
          state.submitting = false;
        });
    };

    const saveFormData = (): void => {
      const formData = toRaw(modelRef);
      localStorage.set(LOCAL_SAVE_BASIC_FORM_DATA_KEY, JSON.stringify(formData));
      message.info(t('form.basicform.form.save'));
    };
    return {
      t,
      route,
      state,

      // form
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
      modelRef,
      handleSubmit,
      validateInfos,
      resetFields,
      saveFormData,
    };
  },
  components: {
    InfoCircleOutlined,
  },
});
</script>
