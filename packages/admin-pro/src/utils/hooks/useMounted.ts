import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';

export interface MountedTypes {
  mounted: Ref<boolean>;
}

export const useMounted = (): MountedTypes => {
  const mounted = ref(false);

  onMounted(() => {
    mounted.value = true;
  });

  onBeforeUnmount(() => {
    mounted.value = false;
  });

  return {
    mounted,
  };
};
