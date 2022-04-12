<template>
  <div v-if="!list || list.length === 0" class="notFound">
    <img
      src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
      alt="not found"
    />
    <div>{{ emptyText }}</div>
  </div>
  <div v-else>
    <a-list class="list" :dataSource="list">
      <template #renderItem="{ item }">
        <a-list-item
          :class="{ item: true, read: item.read }"
          :key="item.key"
          @click="handleClick(item)"
        >
          <a-list-item-meta class="meta">
            <template v-if="item.avatar" #avatar>
              <a-avatar v-if="typeof item.avatar === 'string'" class="avatar" :src="item.avatar" />
              <span v-else class="iconElement">{{ item.avatar }}</span>
            </template>
            <template #title>
              <div class="title">
                {{ item.title }}
                <div class="extra">
                  <slot name="extra" v-bind="item">{{ item.extra }}</slot>
                </div>
              </div>
            </template>
            <template #description>
              <div>
                <div class="description">{{ item.description }}</div>
                <div class="datetime">{{ item.datetime }}</div>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <div v-if="showClear || showViewMore" class="bottomBar">
      <div v-if="showClear" @click="$emit('clear')">{{ clearText }} {{ title }}</div>
      <div v-if="showViewMore" @click="$emit('viewMore')">
        {{ viewMoreText }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { NoticeItem } from '@/api/user/notice';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoticeList',
  props: {
    count: Number,
    showClear: Boolean,
    showViewMore: Boolean,
    list: Array,
    emptyText: String,
    clearText: String,
    viewMoreText: String,
    title: String,
  },
  emits: ['itemClick', 'clear', 'viewMore'],
  slots: ['extra'],
  setup(_props, { emit }) {
    const handleClick = (item: NoticeItem) => {
      emit('itemClick', item);
    };
    return {
      handleClick,
    };
  },
});
</script>
<style lang="less" scoped>
.list {
  max-height: 400px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    padding-right: 24px;
    padding-left: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;

    .meta {
      width: 100%;
    }

    .avatar {
      margin-top: 4px;
      background: @component-background;
    }
    .iconElement {
      font-size: 32px;
    }

    &.read {
      opacity: 0.4;
    }
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background: @primary-1;
    }
    .title {
      margin-bottom: 8px;
      font-weight: normal;
    }
    .description {
      font-size: 12px;
      line-height: @line-height-base;
    }
    .datetime {
      margin-top: 4px;
      font-size: 12px;
      line-height: @line-height-base;
    }
    .extra {
      float: right;
      margin-top: -1.5px;
      margin-right: 0;
      color: @text-color-secondary;
      font-weight: normal;
    }
  }
  .loadMore {
    padding: 8px 0;
    color: @primary-6;
    text-align: center;
    cursor: pointer;
    &.loadedAll {
      color: rgba(0, 0, 0, 0.25);
      cursor: unset;
    }
  }
}

.notFound {
  padding: 73px 0 88px;
  color: @text-color-secondary;
  text-align: center;
  img {
    display: inline-block;
    height: 76px;
    margin-bottom: 16px;
  }
}

.bottomBar {
  height: 46px;
  color: @text-color;
  line-height: 46px;
  text-align: center;
  border-top: 1px solid @border-color-split;
  border-radius: 0 0 @border-radius-base @border-radius-base;
  transition: all 0.3s;
  div {
    display: inline-block;
    width: 50%;
    cursor: pointer;
    transition: all 0.3s;
    user-select: none;

    &:only-child {
      width: 100%;
    }
    &:not(:only-child):last-child {
      border-left: 1px solid @border-color-split;
    }
  }
}
</style>
