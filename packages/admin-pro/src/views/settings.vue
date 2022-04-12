<template>
  <div>
    <a-button @click="handleClick">Click</a-button>
    <a-modal
      :force-render="true"
      :visible="state.visible"
      @ok="
        () => {
          state.visible = false;
        }
      "
    >
      <template #title>
        <div v-drag>Basic Modal</div>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      visible: false,
    });

    const handleClick = () => {
      state.visible = !state.visible;
    };
    return {
      state,
      handleClick,
    };
  },
});
</script>
