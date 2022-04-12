<template>
  <span>
    <star-two-tone v-if="type === 'star'" />
    <like-outlined v-else-if="type === 'like'" />
    <message-filled v-else />
    {{ text }}
  </span>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { StarTwoTone, LikeOutlined, MessageFilled } from '@ant-design/icons-vue';

export type IconType = 'star' | 'like' | 'message';

export default defineComponent({
  name: 'IconText',
  props: {
    type: {
      type: String as PropType<IconType>,
      required: true,
    },
    text: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    StarTwoTone,
    LikeOutlined,
    MessageFilled,
  },
});
</script>
