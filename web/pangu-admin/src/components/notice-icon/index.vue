<template>
  <notice-dropdown class="action" :count="userInfo && userInfo.unreadCount" :loading="loading">
    <a-tabs class="notice-tab" v-model:activeKey="activeKey" centered>
      <template v-for="{ key, title, emptyText, showViewMore } in noticesConfig" :key="key">
        <a-tab-pane v-if="key" :key="key" :tab="title">
          <notice-list
            :title="title"
            :count="unreadMsgs[key]"
            :list="noticeData[key]"
            :emptyText="emptyText"
            :showViewMore="showViewMore"
            @itemClick="changeReadState"
            clearText="Empty"
            viewMoreText="See more"
            @clear="handleNoticeClear(title, key)"
            @viewMore="handleViewMore(key)"
            showClear
          >
            <template #extra="notice">
              <a-tag
                v-if="notice.extra && notice.status"
                style="margin-right: 0"
                :color="color[notice.status]"
              >
                {{ notice.extra }}
              </a-tag>
              <template v-else>
                {{ notice.extra }}
              </template>
            </template>
          </notice-list>
        </a-tab-pane>
      </template>
    </a-tabs>
  </notice-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';
import type { NoticeItem } from '@/api/user/notice';
import { queryNotices } from '@/api/user/notice';
import dayjs from 'dayjs';
import groupBy from 'lodash.groupby';
import NoticeDropdown from './notice-dropdown.vue';
import NoticeList from './notice-list.vue';
import { message } from 'ant-design-vue/lib';
import { useStore } from 'vuex';
import { SET_INFO } from '@/store/modules/user/mutations';

// 如需要实时更新提醒通知，可以配置 realtime 为 true 打开该轮询，或者自行尝试配置 websocket 功能
// 注意：目前未读数量是通过 currentUSer 接口取回的，如果更改成实时，未读数量也建议更改成独立接口 或者 合并到 getNoticeData 中
const useFetchNotice = (getNoticeData: () => Promise<void>, realtime?: boolean) => {
  let interval: any;
  onMounted(() => {
    getNoticeData();
    if (realtime) {
      interval = setInterval(() => {
        getNoticeData();
      }, 5000);
    }
  });

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
};

export default defineComponent({
  name: 'NoticeIcon',
  // props: {},
  components: {
    NoticeDropdown,
    NoticeList,
  },
  emits: [],
  setup() {
    const store = useStore();
    const userInfo = computed(() => store.getters['user/info']);
    const list = ref<NoticeItem[]>([]);
    const loading = ref(true);
    const activeKey = ref('notification');
    const color = {
      todo: '',
      processing: 'blue',
      urgent: 'red',
      doing: 'gold',
    };
    const noticesConfig = ref([
      {
        key: 'notification',
        title: 'Notification',
        emptyText: 'You have viewed all notifications',
        showViewMore: true,
      },
      {
        key: 'message',
        title: 'Message',
        emptyText: 'You have read all messages',
        showViewMore: true,
      },
      {
        key: 'event',
        title: 'To do',
        emptyText: 'You have completed all to-dos',
        showViewMore: false,
      },
    ]);
    const getNoticeData = async () => {
      const notices = await queryNotices();
      if (!notices || notices.length === 0 || !Array.isArray(notices)) {
        list.value = [];
      } else {
        const newNotices = notices.map(notice => {
          const newNotice = { ...notice };

          if (newNotice.datetime) {
            newNotice.datetime = dayjs(notice.datetime as string).fromNow();
          }

          if (newNotice.id) {
            newNotice.key = newNotice.id;
          }
          return newNotice;
        });
        list.value = newNotices;
      }
      loading.value = false;
    };

    const noticeData = computed(() => groupBy(list.value, 'type'));

    const unreadMsgs = computed(() => {
      const unreadMsg: Record<string, number> = {};
      Object.keys(noticeData.value).forEach(key => {
        const value = noticeData.value[key];

        if (!unreadMsg[key]) {
          unreadMsg[key] = 0;
        }

        if (Array.isArray(value)) {
          unreadMsg[key] = value.filter(item => !item.read).length;
        }
      });
      return unreadMsg;
    });

    useFetchNotice(getNoticeData);

    const changeReadState = (clickedItem: NoticeItem) => {
      const { id } = clickedItem;
      const index = list.value.findIndex(item => item.id === id);
      list.value[index].read = true;
      list.value = [...list.value];
      store.commit(`user/${SET_INFO}`, {
        totalCount: list.value.length,
        unreadCount: list.value.filter(item => !item.read).length,
      });
      // 你应该通过接口告诉后端更改数据库数据
    };
    const handleViewMore = (key: string) => {
      message.info(`Click on view more ${key}`);
    };
    const handleNoticeClear = (title: string, key: string) => {
      message.success(`Emptied ${title}`);
      list.value = list.value.filter(item => item.type !== key);
      store.commit(`user/${SET_INFO}`, {
        totalCount: list.value.length,
        unreadCount: list.value.filter(item => !item.read).length,
      });
      // 你应该通过接口告诉后端更改数据库数据
    };
    return {
      noticesConfig,
      list,
      activeKey,
      loading,
      color,
      noticeData,
      unreadMsgs,
      changeReadState,
      handleNoticeClear,
      handleViewMore,
      userInfo,
    };
  },
});
</script>

<style lang="less" scoped>
.notice-tab :deep(.ant-tabs-nav-list) {
  .ant-tabs-tab {
    flex: 1;
    justify-content: center;
  }
}
</style>
