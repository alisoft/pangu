<template>
  <a-list
    rowKey="id"
    class="cover-card-list"
    :loading="context.loading"
    :data-source="context.dataSource"
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4, xxxl: 4 }"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card class="projects-card" hoverable>
          <template #cover>
            <img :src="item.cover" :alt="item.title" />
          </template>

          <a-card-meta :title="item.title">
            <template #description>
              {{ item.description }}
            </template>
          </a-card-meta>
          <div class="card-item-content">
            <span>{{ dateFormatNow(item.updatedAt) }}</span>
            <div class="avatar-list">
              <avatar-list size="small">
                <avatar-list-item
                  v-for="member in item.members"
                  :key="member"
                  :src="member.avatar"
                  :tips="member.name"
                />
              </avatar-list>
            </div>
          </div>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { queryFakeList } from '@/api/list/basic-list';
import { dateFormatNow } from '@/utils/date-util';
import AvatarList from '@/components/avatar-list/list.vue';
import AvatarListItem from '@/components/avatar-list/item.vue';

export default defineComponent({
  name: 'Projects',
  setup() {
    const { reload, context } = useFetchData(() => {
      return new Promise<any>((resolve, reject) => {
        queryFakeList({ count: 16 })
          .then(list => {
            resolve({
              data: list,
              success: true,
              total: 16,
            });
          })
          .catch(reject);
      });
    });

    return {
      reload,
      context,

      dateFormatNow,
    };
  },
  components: {
    AvatarList,
    AvatarListItem,
  },
});
</script>

<style lang="less" scoped>
.cover-card-list {
  .projects-card {
    :deep(.ant-card-meta-title) {
      margin-bottom: 4px;
      & > a {
        display: inline-block;
        max-width: 100%;
        color: @heading-color;
      }
    }
    :deep(.ant-card-meta-description) {
      height: 44px;
      overflow: hidden;
      line-height: 22px;
    }

    &:hover {
      :deep(.ant-card-meta-title) {
        > a {
          color: @primary-color;
        }
      }
    }
  }

  .card-item-content {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;
    & > span {
      flex: 1;
      color: @text-color-secondary;
      font-size: 12px;
    }
    .avatar-ist {
      flex: 0 1 auto;
    }
  }
  .card-list {
    margin-top: 24px;
  }

  :deep(.ant-list) {
    .ant-list-item-content-single {
      max-width: 100%;
    }
  }
}
</style>
