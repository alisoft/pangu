<template>
  <div v-bind="$attrs">
    <a-input
      class="area-code"
      :value="values[0]"
      @change="handleChangeValue1"
      @blur="$emit('blur')"
    />
    <a-input
      class="phone-number"
      :value="values[1]"
      @change="handleChangeValue2"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'InputPhone',
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
  },
  inheritAttrs: false,
  emits: ['update:modelValue', 'blur', 'change'],
  setup(props, { emit }) {
    const values = computed(() => (props.modelValue && props.modelValue.split('-')) || ['', '']);
    const handleChangeValue1 = (e: Event) => {
      const newVal = `${(e.target as HTMLInputElement).value}-${values.value[1]}`;
      emit('update:modelValue', newVal);
      emit('change', newVal);
    };
    const handleChangeValue2 = (e: Event) => {
      const newVal = `${values.value[0]}-${(e.target as HTMLInputElement).value}`;
      emit('update:modelValue', newVal);
      emit('change', newVal);
    };

    return {
      values,
      handleChangeValue1,
      handleChangeValue2,
    };
  },
});
</script>

<style lang="less" scoped>
.area-code {
  width: 30%;
  max-width: 128px;
  margin-right: 8px;
}
.phone-number {
  width: ~'calc(70% - 8px)';
  max-width: 312px;
}
</style>
