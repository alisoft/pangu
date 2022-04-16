<template>
  <div style="padding: 20px; background-color: #e6f7ff; border: 1px solid #91d5ff">
    <h2>Menu 1-2</h2>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Menu1-2',
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>
