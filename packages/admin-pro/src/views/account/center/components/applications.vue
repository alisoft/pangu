<template>
  <div>
    <a-list
      class="filter-card-list"
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }"
      :loading="context.loading"
      :dataSource="context.dataSource"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card :hoverable="true">
            <a-card-meta>
              <template #title>
                <div style="margin-bottom: 3px">{{ item.title }}</div>
              </template>
              <template #avatar>
                <a-avatar class="card-avatar" :src="item.avatar" size="small" />
              </template>
            </a-card-meta>
            <template #actions>
              <a>
                <download-outlined />
              </a>
              <a>
                <edit-outlined />
              </a>
              <a>
                <share-alt-outlined />
              </a>
              <a>
                <a-dropdown>
                  <a class="ant-dropdown-link" href="javascript:;">
                    <ellipsis-outlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </a>
            </template>
            <div class="cardInfo">
              <div>
                <p>活跃用户</p>
                <p>
                  <span>
                    {{ FormatWan(item.activeUser)[0] }}
                    <span>{{ FormatWan(item.activeUser)[1] }}</span>
                  </span>
                </p>
              </div>
              <div>
                <p>新增用户</p>
                <p>{{ NumberFormat(item.newUser) }}</p>
              </div>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';
import { NumberFormat, FormatWan } from '@/utils/number-util';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { queryFakeList } from '@/api/list/basic-list';

export default defineComponent({
  name: 'Applications',
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

      // func
      NumberFormat,
      FormatWan,
    };
  },
  components: {
    DownloadOutlined,
    EditOutlined,
    EllipsisOutlined,
    ShareAltOutlined,
  },
});
</script>

<style lang="less" scoped>
.filter-card-list {
  margin-bottom: -24px;

  :deep(.ant-card-meta-content) {
    margin-top: 0;
  }
  // disabled white space
  :deep(.ant-card-meta-avatar) {
    font-size: 0;
  }
  :deep(.ant-list) {
    .ant-list-item-content-single {
      max-width: 100%;
    }
  }
  .cardInfo {
    margin-top: 16px;
    margin-left: 40px;
    zoom: 1;
    &::before,
    &::after {
      display: table;
      content: ' ';
    }
    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }
    & > div {
      position: relative;
      float: left;
      width: 50%;
      text-align: left;
      p {
        margin: 0;
        font-size: 24px;
        line-height: 32px;
      }
      p:first-child {
        margin-bottom: 4px;
        color: @text-color-secondary;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
