<template>
  <page-container title="路由跳转示例">
    <a-card :bordered="false">
      <a-row :gutter="16">
        <a-col :sm="24" :md="12">
          <a-card title="router change">
            <router-link :to="'/workplace'">工作台</router-link>
            <br />
            <br />
            <router-link :to="{ path: '/dashboard/welcome' }">欢迎页</router-link>
            <br />
            <br />
            <router-link :to="{ path: '/profile/basic', query: { userId: '123' } }">
              详情页(带参数)
            </router-link>
            <br />
            <br />
            <router-link :to="{ path: '/profile/basic', hash: '#sddd' }">
              详情页(带hash)
            </router-link>
            <br />
            <br />
            <a-button type="primary" @click="onClick">router.push</a-button>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RouterExample',
  setup() {
    const router = useRouter();
    return {
      onClick: () => {
        router.push({ path: '/profile/basic', query: { userId: '123' } });
      },
    };
  },
});
</script>
