<template>
  <div style="padding: 20px; background-color: #fffbe6; border: 1px solid #ffe58f">
    <h2>Menu 1-2-1</h2>
    <div style="padding: 24px">
      <strong>嵌套路由页面内容</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Menu1-2-1',
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>
