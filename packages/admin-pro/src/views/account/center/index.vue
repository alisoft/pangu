<template>
  <grid-content>
    <a-row :gutter="24">
      <a-col :md="24" :lg="7">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img :src="currentUser.avatar" />
            </div>
            <div class="username">{{ currentUser.nickname }}</div>
            <div class="bio">{{ currentUser.extra.signature }}</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="title"></i>
              {{ currentUser.extra.title }}
            </p>
            <p>
              <i class="group"></i>
              {{ currentUser.extra.group }}
            </p>
            <p>
              <i class="address"></i>
              <span>
                {{ (currentUser.extra.geographic || { province: { label: '' } }).province.label }}
              </span>
              <span>
                {{ (currentUser.extra.geographic || { city: { label: '' } }).city.label }}
              </span>
            </p>
          </div>
          <a-divider />

          <div class="account-center-tags">
            <div class="tagsTitle">标签</div>
            <div>
              <template
                v-for="tag in (currentUser.extra.tags || []).concat(newTags)"
                :key="tag.key"
              >
                <a-tag :closable="tag.key === '-1'" :close="() => handleTagClose(tag)">
                  {{ tag.label }}
                </a-tag>
              </template>
              <a-input
                v-if="tagInputVisible"
                ref="tagInput"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="tagInputValue"
                @change="handleInputChange"
                @blur="handleTagInputConfirm"
                @keyup.enter="handleTagInputConfirm"
              />
              <a-tag v-else @click="showTagInput" style="background: #fff; border-style: dashed">
                <plus-outlined />
                New Tag
              </a-tag>
            </div>
          </div>
          <a-divider :dashed="true" />

          <div class="account-center-team">
            <div class="teamTitle">团队</div>
            <a-spin :spinning="projects.loading">
              <a-row :gutter="36" class="members">
                <a-col :lg="24" :xl="12" v-for="item in projects.dataSource" :key="item.id">
                  <a :href="item.href">
                    <a-avatar size="small" :src="item.logo" />
                    {{ item.member }}
                  </a>
                </a-col>
              </a-row>
            </a-spin>
          </div>
        </a-card>
      </a-col>
      <a-col :md="24" :lg="17">
        <a-card
          style="width: 100%"
          :bordered="false"
          :tabList="tabListNoTitle"
          :activeTabKey="titleActiveKey"
          @tabChange="handleTabChange"
        >
          <applications v-if="titleActiveKey === 'app'" />
          <articles v-else-if="titleActiveKey === 'article'" />
          <projects v-else-if="titleActiveKey === 'project'" />
        </a-card>
      </a-col>
    </a-row>
    <a-back-top />
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, toRefs, nextTick } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { GridContent } from '@/components';
import { useStore } from 'vuex';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { queryProjectNotice } from '@/api/dashboard/workplace';

import Applications from './components/applications.vue';
import Articles from './components/articles.vue';
import Projects from './components/projects.vue';

interface TagType {
  key: string;
  label: string;
}

export default defineComponent({
  name: 'AccountCenter',
  setup() {
    const store = useStore();
    const tagInput = ref();
    const state = reactive({
      newTags: [] as TagType[],

      tagInputVisible: false,
      tagInputValue: '',

      tabListNoTitle: [
        {
          key: 'article',
          tab: '文章(8)',
        },
        {
          key: 'app',
          tab: '应用(8)',
        },
        {
          key: 'project',
          tab: '项目(8)',
        },
      ],
      titleActiveKey: 'app',
    });
    const { context: projects } = useFetchData(() => {
      return queryProjectNotice().then(res => {
        return {
          data: res,
          total: 100,
        };
      });
    });

    const handleTabChange = (key: string) => {
      state.titleActiveKey = key;
    };
    const handleTagClose = (removeTag: string) => {
      const newTags = state.newTags.filter(tag => tag.label !== removeTag);
      state.newTags = newTags;
    };
    const showTagInput = () => {
      state.tagInputVisible = true;
      nextTick(() => {
        tagInput.value.focus();
      });
    };
    const handleInputChange = (e: Event) => {
      state.tagInputValue = (e.target as HTMLInputElement).value;
    };
    const handleTagInputConfirm = () => {
      const inputValue = state.tagInputValue;
      const oldTags: string[] = state.newTags.map(tag => tag.label);
      let tags = state.newTags;
      if (inputValue && !oldTags.includes(inputValue)) {
        tags = [
          ...tags,
          {
            key: '-1',
            label: inputValue,
          },
        ];
      }
      state.newTags = tags;
      state.tagInputVisible = false;
      state.tagInputValue = '';
    };

    return {
      currentUser: computed(() => store.getters['user/currentUser']),
      tagInput,
      projects,
      ...toRefs(state),

      // func
      handleTabChange,
      handleTagClose,
      handleInputChange,
      handleTagInputConfirm,
      showTagInput,
    };
  },
  components: {
    GridContent,
    Applications,
    Articles,
    Projects,

    PlusOutlined,
  },
});
</script>

<style lang="less" scoped>
.account-center-avatarHolder {
  margin-bottom: 24px;
  text-align: center;

  & > .avatar {
    width: 104px;
    height: 104px;
    margin: 0 auto;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .username {
    margin-bottom: 4px;
    color: @text-color;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
}

.account-center-detail {
  p {
    position: relative;
    margin-bottom: 8px;
    padding-left: 26px;
  }

  i {
    position: absolute;
    top: 4px;
    left: 0;
    width: 14px;
    height: 14px;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
  }

  .title {
    background-position: 0 0;
  }
  .group {
    background-position: 0 -22px;
  }
  .address {
    background-position: 0 -44px;
  }
}

.account-center-tags {
  .ant-tag {
    margin-bottom: 8px;
  }
}

.account-center-team {
  .members {
    a {
      display: block;
      height: 24px;
      margin: 12px 0;
      overflow: hidden;
      color: @text-color;
      line-height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;

      &:hover {
        color: @primary-color;
      }
    }
  }
}

.tagsTitle,
.teamTitle {
  margin-bottom: 12px;
  color: @text-color;
  font-weight: 500;
}
</style>
