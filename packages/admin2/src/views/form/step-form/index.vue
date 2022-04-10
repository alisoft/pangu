<template>
  <page-container :title="t(`${route.meta.title}`)">
    <template #content>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</template>
    <a-card :bordered="false">
      <a-steps :current="current" class="steps">
        <a-step title="填写转账信息" />
        <a-step title="确认转账信息" />
        <a-step title="完成" />
      </a-steps>
      <step1 v-if="current === 0" @next-step="nextStep" />
      <step2 v-if="current === 1" @next-step="nextStep" @prev="prevStep" />
      <step3 v-if="current === 2" @finish="finish" />
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import Step1 from './components/step1/index.vue';
import Step2 from './components/step2/index.vue';
import Step3 from './components/step3/index.vue';

export default defineComponent({
  name: 'StepForm',
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const current = ref(0);

    const nextStep = () => {
      if (current.value < 2) {
        current.value += 1;
      }
    };
    const prevStep = () => {
      if (current.value > 0) {
        current.value -= 1;
      }
    };
    const finish = () => {
      current.value = 0;
    };

    return {
      t,
      route,

      current,
      nextStep,
      prevStep,
      finish,
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
  },
});
</script>

<style lang="less" scoped>
.card {
  margin-bottom: 24px;
}

.heading {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 22px;
}

.steps {
  max-width: 750px;
  margin: 16px auto;
}
</style>
