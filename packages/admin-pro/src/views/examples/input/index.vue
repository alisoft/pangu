<template>
  <page-container title="Input 输入框">
    <template #content>
      需要用户输入表单域内容时。
      <br />
      提供组合型输入框，带搜索的输入框，还可以进行大小选择。
    </template>
    <a-card :bordered="false">
      <a-row :gutter="32">
        <a-col :sm="24" :md="12">
          <h5>基本使用</h5>
          <div>
            <a-input v-model:value="state.value" placeholder="Basic usage" />
          </div>
        </a-col>
        <a-col :sm="24" :md="12">
          <h5>搜索</h5>
          <a-input-search
            v-model:value="state.value"
            placeholder="input search text"
            style="width: 100%"
            @search="handleSearch"
          />
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin-top: 24px">
        <a-col :sm="24" :md="12">
          <h5>文本域</h5>
          <a-textarea v-model:value="state.value" placeholder="Basic usage" :rows="4" />
        </a-col>
        <a-col :sm="24" :md="12">
          <h5>密码框</h5>
          <a-input-password v-model:value="state.value" placeholder="input password" />
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin-top: 24px">
        <a-col :sm="24" :md="12">
          <h5>前置/后置标签</h5>
          <div>
            <div style="margin-bottom: 16px">
              <a-input addon-before="Http://" addon-after=".com" v-model:value="state.value1" />
            </div>
            <div style="margin-bottom: 16px">
              <a-input v-model:value="state.value2">
                <template #addonBefore>
                  <a-select v-model:value="state.value3" style="width: 90px">
                    <a-select-option value="Http://">Http://</a-select-option>
                    <a-select-option value="Https://">Https://</a-select-option>
                  </a-select>
                </template>
                <template #addonAfter>
                  <a-select v-model:value="state.value4" style="width: 80px">
                    <a-select-option value=".com">.com</a-select-option>
                    <a-select-option value=".jp">.jp</a-select-option>
                    <a-select-option value=".cn">.cn</a-select-option>
                    <a-select-option value=".org">.org</a-select-option>
                  </a-select>
                </template>
              </a-input>
            </div>
            <div style="margin-bottom: 16px">
              <a-input v-model:value="state.value5">
                <template #addonAfter>
                  <setting-outlined />
                </template>
              </a-input>
            </div>
          </div>
        </a-col>
        <a-col :sm="24" :md="12">
          <h5>搜索框 loading</h5>
          <a-input-search
            v-model:value="state.value"
            placeholder="input search loading deault"
            loading
          />
          <br />
          <br />
          <a-input-search
            v-model:value="state.value"
            placeholder="input search loading with enterButton"
            loading
            enter-button
          />
        </a-col>
      </a-row>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'InputExample',
  setup() {
    const state = reactive({
      value: undefined,
      value1: 'mysite',
      value2: 'mysite',
      value3: 'Http://',
      value4: '.com',
      value5: 'mysite',
    });

    const handleSearch = (value: string) => {
      console.log('or use this.value', value, state.value);
    };

    return {
      state,

      handleSearch,
    };
  },
  components: {
    SettingOutlined,
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
