<template>
  <page-container class="card-list" :title="t(`${$route.meta.title}`)">
    <template #content>
      <div class="page-header-content">
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div class="content-link">
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />
            快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />
            产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />
            产品文档
          </a>
        </div>
      </div>
    </template>
    <template v-if="!isMobile" #extraContent>
      <div class="extra-img">
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    </template>
    <a-list
      rowKey="id"
      :loading="context.loading"
      :grid="{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
        xxxl: 4,
      }"
      :dataSource="[nullData, ...context.dataSource]"
    >
      <template #renderItem="{ item }">
        <template v-if="!item || item.id === undefined">
          <a-list-item>
            <a-button class="new-button" type="dashed">
              <plus-outlined />
              新增产品
            </a-button>
          </a-list-item>
        </template>
        <template v-else>
          <a-list-item>
            <a-card :hoverable="true">
              <a-card-meta>
                <template #title>
                  <a>{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar class="card-avatar" :src="item.avatar" size="large" />
                </template>
                <template #description>
                  <div class="card-description">{{ item.content }}</div>
                </template>
              </a-card-meta>
              <template v-slot:actions>
                <a>操作一</a>
                <a>操作二</a>
              </template>
            </a-card>
          </a-list-item>
        </template>
      </template>
    </a-list>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref, toRefs } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import type { CardListItemDataType } from './typing';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { queryFakeList } from '@/api/list/card-list';

export default defineComponent({
  name: 'CardList',
  setup() {
    const { t } = useI18n();
    const state = reactive({
      loading: false,
      list: [],
    });

    const nullData: Partial<CardListItemDataType> = {};

    const { context } = useFetchData(() => {
      return queryFakeList().then(res => {
        return {
          data: res,
          total: 100,
        };
      });
    });

    return {
      t,
      context,
      ...toRefs(state),
      nullData,
      isMobile: inject('isMobile', ref(false)),
    };
  },
  components: {
    PlusOutlined,
  },
});
</script>

<style lang="less" scoped>
@import './utils/utils.less';

.card-list {
  :deep(.ant-page-header-content) {
    overflow: unset;
  }
  :deep(.card) {
    .ant-card-meta-title {
      margin-bottom: 12px;
      & > a {
        display: inline-block;
        max-width: 100%;
        color: @heading-color;
      }
    }
    .ant-card-body:hover {
      .ant-card-meta-title > a {
        color: @primary-color;
      }
    }
  }

  .item {
    height: 64px;
  }

  :deep(.ant-list) {
    .ant-list-item-content-single {
      max-width: 100%;
    }
  }
}

.extra-img {
  width: 155px;
  margin-top: -20px;
  text-align: center;
  img {
    width: 100%;
  }
}

.new-button {
  width: 100%;
  height: 201px;
  color: @text-color-secondary;
  background-color: @component-background;
  border-color: @border-color-base;
}

.card-avatar {
  width: 48px;
  height: 48px;
  border-radius: 48px;
}

.card-description {
  height: 64px;
  margin-bottom: 1em;
  .textOverflowMulti();
}

.page-header-content {
  position: relative;
}

.content-link {
  margin-top: 16px;
  a {
    margin-right: 32px;
    img {
      width: 24px;
    }
  }
  img {
    margin-right: 8px;
    vertical-align: middle;
  }
}

@media screen and (max-width: @screen-lg) {
  .content-link {
    a {
      margin-right: 16px;
    }
  }
}
@media screen and (max-width: @screen-md) {
  .extraImg {
    display: none;
  }
}

@media screen and (max-width: @screen-sm) {
  .page-header-content {
    padding-bottom: 30px;
  }
  .content-link {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 1000px;
    a {
      margin-right: 16px;
    }
    img {
      margin-right: 4px;
    }
  }
}
</style>
