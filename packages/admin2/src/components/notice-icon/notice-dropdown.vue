<template>
  <a-dropdown
    class="ant-pro-dropdown ant-pro-dropdown-action"
    placement="bottomRight"
    :trigger="['click']"
    v-model:visible="visible"
    overlayClassName="pro-components-header-notice-icon-index-container"
  >
    <span :class="['noticeButton', { opened: visible }]">
      <a-badge :count="count" :style="{ boxShadow: 'none' }" class="badge">
        <slot name="bell">
          <bell-outlined class="icon" />
        </slot>
      </a-badge>
    </span>
    <template #overlay>
      <div>
        <a-spin :spinning="loading" :delay="300">
          <slot />
        </a-spin>
      </div>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { BellOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'NoticeDropdown',
  props: {
    count: Number,
    loading: Boolean,
  },
  slots: ['bell'],
  components: {
    BellOutlined,
  },
  setup() {
    const visible = ref(false);
    return {
      visible,
    };
  },
});
</script>
<style lang="less" scoped>
.popover {
  position: relative;
  width: 336px;
}

.noticeButton {
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
}
.icon {
  padding: 4px;
  vertical-align: middle;
}

.badge {
  font-size: 16px;
}

.tabs {
  :deep(.ant-tabs-nav-list) {
    margin: auto;
  }
  :deep(.ant-tabs-nav-scroll) {
    text-align: center;
  }
  :deep(.ant-tabs-bar) {
    margin-bottom: 0;
  }
}
</style>
<style lang="less">
.pro-components-header-notice-icon-index-container > * {
  position: relative;
  width: 336px;
  background-color: @popover-bg;
  border-radius: 4px;
  box-shadow: @shadow-1-down;
}

@media screen and (max-width: @screen-xs) {
  .pro-components-header-notice-icon-index-container {
    width: 100% !important;
  }
  .pro-components-header-notice-icon-index-container > * {
    width: 100% !important;
    border-radius: 0 !important;
  }
}
</style>
