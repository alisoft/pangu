<template>
  <grid-content>
    <a-row>
      <a-col :span="24" style="border-radius: 2px">
        <a-card class="page-header-welcome">
          <h1>
            早安，{{ currentUser.nickname }}
            <span class="welcome-text">，祝你开心每一天！</span>
          </h1>
          <p class="desc">{{ currentUser.extra.group }}</p>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" style="margin-top: 24px">
      <a-col :xl="17" :lg="17" :md="24" :sm="24" :xs="24">
        <a-card :bordered="false" style="margin-bottom: 24px">
          <a-row>
            <a-col :md="6" :sm="24" :xs="24">
              <info title="我的待办" value="8个任务" :bordered="true" />
            </a-col>
            <a-col :md="6" :sm="24" :xs="24">
              <info title="本周任务平均处理时间" value="32分钟" :bordered="true" />
            </a-col>
            <a-col :md="6" :sm="24" :xs="24">
              <info title="本周完成任务数" value="24个任务" :bordered="true" />
            </a-col>
            <a-col :md="6" :sm="24" :xs="24">
              <info title="异常（个）" value="1" />
            </a-col>
          </a-row>
        </a-card>

        <a-card
          :loading="activities.loading"
          title="动态"
          :bordered="false"
          style="margin-bottom: 24px"
        >
          <a-list>
            <a-list-item :key="item.id" v-for="item in activities.dataSource">
              <a-list-item-meta>
                <template #avatar>
                  <a-avatar :src="item.user.avatar" />
                </template>
                <template #title>
                  <div>
                    <a>{{ item.user.name }}</a>
                    &nbsp;
                    <span class="events">
                      <template
                        v-for="event in item.template.split(/@\{([^{}]*)\}/gi)"
                        :key="event"
                      >
                        <a v-if="item[event]" :href="item[event].link">
                          {{ item[event].name }}
                        </a>
                        <span v-else>{{ event }}</span>
                      </template>
                    </span>
                  </div>
                </template>
                <template #description>
                  <div>{{ item.time }}</div>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xl="7" :lg="7" :md="24" :sm="24" :xs="24">
        <div class="cover-tips" style="margin-bottom: 24px">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" />
        </div>
        <a-card :tab-list="tabList" style="margin-bottom: 24px">
          <div class="members">
            <a-row>
              <a-col v-for="item in projects.dataSource" :key="`members-item-${item.id}`" :span="8">
                <a :href="item.href">
                  <a-avatar class="member-cover" size="large" :src="item.logo" />
                  <span class="member">{{ item.member }}</span>
                </a>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </grid-content>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { GridContent } from '@/components';
import { useStore } from 'vuex';
import Info from '@/views/list/basic-list/info.vue';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { queryActivities, queryProjectNotice } from '@/api/dashboard/workplace';

export default defineComponent({
  name: 'Workplace2',
  setup() {
    const store = useStore();
    const state = reactive({
      tabList: [
        { key: 'my', tab: '我的' },
        { key: 'fov', tab: '我的收藏' },
      ],
    });
    const { context: activities } = useFetchData(() => {
      return queryActivities().then(res => {
        return {
          data: res,
          total: 100,
        };
      });
    });
    const { context: projects } = useFetchData(() => {
      return queryProjectNotice().then(res => {
        return {
          data: res,
          total: 100,
        };
      });
    });
    return {
      currentUser: computed(() => store.getters[`user/currentUser`]),
      activities,
      projects,

      ...toRefs(state),
    };
  },
  components: { GridContent, Info },
});
</script>

<style lang="less" scoped>
.page-header-welcome {
  background: #27a6fe;

  h1 {
    color: @text-color-inverse;
    font-size: @heading-3-size;
  }
  .desc {
    color: @text-color-inverse;
  }
}
.cover-tips {
  width: 100%;
  > img {
    display: block;
    width: 100%;
  }
}
.members {
  a {
    display: block;
    line-height: 80px;
    text-align: center;

    .member {
      display: block;
      color: @text-color;
      font-size: 14px;
      line-height: 24px;
      vertical-align: top;
      transition: all 0.3s;
    }

    &:hover {
      span {
        color: @primary-color;
      }
    }
  }
}
</style>
