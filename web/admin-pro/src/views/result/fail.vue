<template>
  <a-card :bordered="false">
    <a-result
      status="error"
      title="提交失败"
      subTitle="请核对并修改以下信息后，再重新提交。"
      style="margin-bottom: 16px; margin-top: 48px"
    >
      <template #extra>
        <a-button type="primary">返回修改</a-button>
      </template>
      <div class="title">您提交的内容有如下错误：</div>
      <div style="margin-bottom: 16px">
        <close-circle-outlined style="margin-right: 8px" class="error_icon" />
        您的账户已被冻结
        <a style="margin-left: 16px">
          立即解冻
          <right-outlined />
        </a>
      </div>
      <div>
        <close-circle-outlined style="margin-right: 8px" class="error_icon" />
        您的账户还不具备申请资格
        <a style="margin-left: 16px">
          立即升级
          <right-outlined />
        </a>
      </div>
    </a-result>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    CloseCircleOutlined,
    RightOutlined,
  },
});
</script>

<style lang="less" scoped>
.error_icon {
  color: @highlight-color;
}
.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 500;
  font-size: 16px;
}
</style>
