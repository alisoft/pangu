<template>
  <div class="list-content">
    <div class="description">
      <slot>
        {{ content }}
      </slot>
    </div>
    <div class="extra">
      <a-avatar :src="avatar" size="small" />
      <a :href="href">{{ owner }}</a>
      发布在
      <a :href="href">{{ href }}</a>
      <em>{{ dateFormat(updateAt) }}</em>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { dateFormat } from '@/utils/date-util';

export default defineComponent({
  name: 'ArticleListContent',
  props: {
    content: {
      type: String,
      default: '',
    },
    owner: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    updateAt: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {
      dateFormat,
    };
  },
});
</script>

<style lang="less" scoped>
.list-content {
  .description {
    max-width: 720px;
    line-height: 22px;
  }
  .extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;
    & > :deep(.ant-avatar) {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
    }
    & > em {
      margin-left: 16px;
      color: @disabled-color;
      font-style: normal;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .listContent {
    .extra {
      & > em {
        display: block;
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }
}
</style>
