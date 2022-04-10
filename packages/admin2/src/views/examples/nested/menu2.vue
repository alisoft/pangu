<template>
  <page-container :title="t('pages.nested.menu1.title')">
    <div style="padding: 20px; background-color: #f6ffed; border: 1px solid #b7eb8f">
      <h2>Menu 2</h2>
      <div style="padding: 24px">
        <strong>嵌套路由页面内容</strong>
      </div>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Menu2',
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>
