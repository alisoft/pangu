import type { Ref, ComponentPublicInstance } from 'vue';
import { ref, onUnmounted } from 'vue';
import { getTargetElement } from '@/utils/dom';
import { default as screenfull } from 'screenfull';

export interface Options {
  onExitFull?: () => void;
  onFull?: () => void;
}

export type UseFullscreen = readonly [
  Ref<ComponentPublicInstance | null>,
  Ref<boolean>,
  {
    setFull: () => void;
    exitFull: () => void;
    toggleFull: () => void;
  },
];

export const useFullscreen = (options?: Options): UseFullscreen => {
  const { onExitFull, onFull } = options || {};
  const elRef = ref<ComponentPublicInstance | null>(null);
  const onExitFullRef = ref(onExitFull);
  const onFullRef = ref(onFull);

  const state = ref(false);

  const onChange = () => {
    if (screenfull.isEnabled) {
      const { isFullscreen } = screenfull;
      if (isFullscreen) {
        onFullRef.value && onFullRef.value();
      } else {
        screenfull.off('change', onChange);
        onExitFullRef.value && onExitFullRef.value();
      }
      state.value = isFullscreen;
    }
  };

  const setFull = () => {
    const el = getTargetElement(elRef);
    if (!el) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.request(el as HTMLElement);
      screenfull.on('change', onChange);
    }
  };

  const exitFull = () => {
    if (!state.value) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };

  const toggleFull = () => {
    if (state.value) {
      exitFull();
    } else {
      setFull();
    }
  };

  onUnmounted(() => {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange);
    }
  });

  return [
    elRef,
    state,
    {
      setFull,
      exitFull,
      toggleFull,
    },
  ] as const;
};

// examples
/*
const [elRef, screenState, { setFull, exitFull, toggleFull } ] = useFullscreen({
  onExitFull: () => {
    console.log('exitFull callback');
  },
  onFull: () => {
    console.log('inFull callback');
  }
});

<template>
  <div ref="elRef">
    <p>123</p>
    <p>current fullscreen state: {{ screenState }}</p>
    <a-button @click="toggleFull">Toggle</a-button>
    <a-button v-if="!screenState" @click="setFull">fullScreen</a-button>
    <a-button v-else @click="exitFull">exitFullScreen</a-button>
  </div>
</template>
*/
