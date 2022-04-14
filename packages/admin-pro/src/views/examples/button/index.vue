<template>
  <page-container title="Button 按钮">
    <template #content>
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    </template>
    <a-card :bordered="false">
      <!-- 基础按钮 -->
      <a-row :gutter="16">
        <a-col :sm="24" :md="12">
          <a-card title="按钮类型" class="pro-examples-button">
            <a-button type="primary">Primary</a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button danger>Danger</a-button>
            <a-config-provider :auto-insert-space-in-button="false">
              <a-button type="primary">按钮</a-button>
            </a-config-provider>
            <a-button type="primary">按钮</a-button>
            <a-button type="link">Link</a-button>
          </a-card>
        </a-col>
        <a-col :sm="24" :md="12">
          <a-card title="按钮尺寸" class="pro-examples-button pro-examples-button-size">
            <a-radio-group :value="state.size" @change="handleSizeChange">
              <a-radio-button value="large">Large</a-radio-button>
              <a-radio-button value="default">Default</a-radio-button>
              <a-radio-button value="small">Small</a-radio-button>
            </a-radio-group>
            <br />
            <br />
            <a-button type="primary" :size="state.size">Primary</a-button>
            <a-button :size="state.size">Normal</a-button>
            <a-button type="dashed" :size="state.size">Dashed</a-button>
            <a-button danger :size="state.size">Danger</a-button>
            <a-button type="link" :size="state.size">Link</a-button>
            <br />
            <a-button type="primary" :size="state.size">
              <template #icon>
                <download-outlined />
              </template>
            </a-button>
            <a-button type="primary" shape="circle" :size="state.size">
              <template #icon>
                <download-outlined />
              </template>
            </a-button>
            <a-button type="primary" shape="round" :size="state.size">
              <template #icon>
                <download-outlined />
              </template>
              Download
            </a-button>
            <a-button type="primary" shape="round" :size="state.size">
              <template #icon>
                <download-outlined />
              </template>
            </a-button>
            <a-button type="primary" :size="state.size">
              <template #icon>
                <download-outlined />
              </template>
              Download
            </a-button>
          </a-card>
        </a-col>
      </a-row>
      <!-- 状态按钮 -->
      <a-row :gutter="16">
        <a-col :sm="24" :md="12">
          <a-card title="不可用状态" class="pro-examples-button pro-examples-button-disabled">
            <a-button type="primary">Primary</a-button>
            <a-button type="primary" disabled>Primary(disabled)</a-button>
            <br />
            <a-button>Default</a-button>
            <a-button disabled>Default(disabled)</a-button>
            <br />
            <a-button type="dashed">Dashed</a-button>
            <a-button type="dashed" disabled>Dashed(disabled)</a-button>
            <br />
            <a-button type="link">Link</a-button>
            <a-button type="link" disabled>Link(disabled)</a-button>
            <div
              :style="{
                padding: '8px 8px 0 8px',
                background: 'rgb(190, 200, 200)',
              }"
            >
              <a-button ghost>Ghost</a-button>
              <a-button ghost disabled>Ghost(disabled)</a-button>
            </div>
          </a-card>
        </a-col>
        <a-col :sm="24" :md="12">
          <a-card title="加载中状态" class="pro-examples-button pro-examples-button-loading">
            <a-button type="primary" loading>Loading</a-button>
            <a-button type="primary" size="small" loading>Loading</a-button>
            <br />
            <a-button type="primary" :loading="state.loading" @mouseenter="enterLoading">
              mouseenter me!
            </a-button>
            <a-button
              type="primary"
              icon="poweroff"
              :loading="state.iconLoading"
              @click="enterIconLoading"
            >
              延迟1s
            </a-button>
            <br />
            <a-button type="primary" loading />
            <a-button type="primary" shape="circle" loading />
            <a-button danger shape="round" loading />
          </a-card>
        </a-col>
      </a-row>
      <!-- 特殊按钮 -->
      <a-row :gutter="16">
        <a-col :sm="24" :md="12">
          <a-card title="多个按钮组合" class="pro-examples-button">
            <a-button type="primary">Primary</a-button>
            <a-button>secondary</a-button>
            <a-dropdown>
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">1st item</a-menu-item>
                  <a-menu-item key="2">2nd item</a-menu-item>
                  <a-menu-item key="3">3rd item</a-menu-item>
                </a-menu>
              </template>
              <a-button>
                Actions
                <down-outlined />
              </a-button>
            </a-dropdown>
          </a-card>
        </a-col>
        <a-col :sm="24" :md="12">
          <a-card title="block 按钮" class="pro-examples-button-block">
            <a-button type="primary" block>Primary</a-button>
            <a-button block>Default</a-button>
            <a-button type="dashed" block>Dashed</a-button>
            <a-button danger block>Danger</a-button>
            <a-button type="link" block>Link</a-button>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { DownOutlined, DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from 'ant-design-vue/es/config-provider';
import type { RadioChangeEvent } from 'ant-design-vue';

export default defineComponent({
  name: 'ButtonExample',
  setup() {
    const state = reactive({
      loading: false,
      iconLoading: false as boolean | { delay: number },
      size: 'large' as SizeType,
    });
    const enterLoading = () => {
      state.loading = true;
    };
    const enterIconLoading = () => {
      state.iconLoading = { delay: 1000 };
    };
    const handleMenuClick = () => {};
    const handleSizeChange = (e: RadioChangeEvent) => {
      state.size = (e.target as HTMLInputElement).value as SizeType;
    };
    return {
      state,

      enterLoading,
      enterIconLoading,
      handleMenuClick,
      handleSizeChange,
    };
  },
  components: {
    DownOutlined,
    DownloadOutlined,
  },
});
</script>

<style lang="less" scoped>
.ant-card {
  margin-bottom: 24px;
}
.pro-examples-button {
  :deep(.ant-btn) {
    margin-right: 8px;
    margin-bottom: 12px;
  }
}
.pro-examples-button-group {
  > h4 {
    margin: 16px 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;

    &:first-child {
      margin-top: 0;
    }
  }

  :deep(.ant-btn-group) {
    margin-right: 8px;
  }
}
.pro-examples-button-block {
  :deep(.ant-btn) {
    margin-bottom: 8px;
  }
}
</style>
