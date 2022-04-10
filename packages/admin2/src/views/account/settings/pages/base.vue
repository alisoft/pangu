<template>
  <div class="base-view">
    <div class="view-left">
      <a-form layout="vertical">
        <a-form-item label="Email" v-bind="validateInfos.email">
          <a-input v-model:value="modelRef.email" />
        </a-form-item>
        <a-form-item label="Nickname" v-bind="validateInfos.nickname">
          <a-input v-model:value="modelRef.nickname" />
        </a-form-item>
        <a-form-item label="Personal profile">
          <a-textarea
            v-model:value="modelRef.bio"
            :rows="4"
            placeholder="Brief introduction to yourself"
          />
        </a-form-item>
        <a-form-item label="Country/Region">
          <a-select value="中国">
            <a-select-option value="中国">中国</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Province or city">
          <city-select v-model:province="modelRef.province" v-model:city="modelRef.city" />
        </a-form-item>
        <a-form-item label="Street Address" v-bind="validateInfos.address">
          <a-input v-model:value="modelRef.address" />
        </a-form-item>
        <a-form-item label="Phone Number" ref="phoneNumberRef" v-bind="validateInfos.phoneNumber">
          <input-phone
            v-model="modelRef.phoneNumber"
            @blur="
              () => {
                phoneNumberRef.onFieldBlur();
              }
            "
            @change="
              () => {
                phoneNumberRef.onFieldChange();
              }
            "
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSubmit">Update Information</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="view-right">
      <div class="avatar">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        />
      </div>
      <a-upload>
        <div class="button-view">
          <a-button>
            <upload-outlined />
            Change
          </a-button>
        </div>
      </a-upload>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import CitySelect from '@/components/city-select/index.vue';
import InputPhone from '@/components/input-phone/index.vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { Form } from 'ant-design-vue';
import type { FormItemInstance } from 'ant-design-vue';

export default defineComponent({
  name: 'BaseSettings',
  setup() {
    const phoneNumberRef = ref<FormItemInstance>();
    const modelRef = reactive({
      email: 'antdesign@alipay.com',
      nickname: 'Serati Ma',
      bio: undefined,
      country: undefined,
      province: '110000',
      city: '110100',
      address: undefined,
      phoneNumber: '',
    });
    const rulesRef = reactive({
      email: [{ required: true, trigger: ['change', 'blur'] }],
      nickname: [{ required: true, trigger: ['change', 'blur'] }],
      address: [{ required: true, trigger: ['change', 'blur'] }],
      phoneNumber: [{ required: true, trigger: ['change', 'blur'] }],
    });
    const { validateInfos, validate } = Form.useForm(modelRef, rulesRef);
    const handleSubmit = () => {
      validate()
        .then(res => {
          console.log('Update Information then:', res);
        })
        .catch(err => {
          console.error('Update Information err:', err);
        });
    };
    return {
      phoneNumberRef,
      modelRef,
      validateInfos,
      handleSubmit,
    };
  },
  components: {
    CitySelect,
    InputPhone,
    UploadOutlined,
  },
});
</script>

<style lang="less" scoped>
.base-view {
  display: flex;
  padding-top: 12px;

  .view-left {
    min-width: 224px;
    max-width: 448px;
  }
  .view-right {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    max-width: 448px;
    padding: 20px;

    .avatar-title {
      height: 22px;
      margin-bottom: 8px;
      color: @heading-color;
      font-size: @font-size-base;
      line-height: 22px;
    }
    .avatar {
      width: 144px;
      height: 144px;
      margin-bottom: 12px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .button-view {
      width: 144px;
      text-align: center;
    }
  }
}

@media screen and (max-width: @screen-xl) {
  .base-view {
    flex-direction: column-reverse;

    .right-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 448px;
      padding: 20px;
      .avatar-title {
        display: none;
      }
    }
  }
}
</style>
