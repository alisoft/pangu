<template>
  <a-list item-layout="horizontal">
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>风格配色</a>
        </template>
        <template v-slot:description>
          <span>整体风格配色设置</span>
        </template>
      </a-list-item-meta>
      <template v-slot:actions>
        <a-switch
          checkedChildren="暗色"
          unCheckedChildren="白色"
          :disabled="true"
          :defaultChecked="(navTheme === 'dark' && true) || false"
        />
      </template>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>主题色</a>
        </template>
        <template v-slot:description>
          <span>
            页面风格配色：
            <a>{{ colorFilter(primaryColor) }}</a>
          </span>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

const themeMap: { [key: string]: string } = {
  dark: '暗色',
  light: '白色',
  realDark: '暗黑模式',
};

const colorList = [
  {
    key: '薄暮',
    color: '#F5222D',
  },
  {
    key: '火山',
    color: '#FA541C',
  },
  {
    key: '日暮',
    color: '#FAAD14',
  },
  {
    key: '明青',
    color: '#13C2C2',
  },
  {
    key: '极光绿',
    color: '#52C41A',
  },
  {
    key: '拂晓蓝（默认）',
    color: '#1890FF',
  },
  {
    key: '极客蓝',
    color: '#2F54EB',
  },
  {
    key: '酱紫',
    color: '#722ED1',
  },
];

const themeFilter = (theme: string) => {
  return themeMap[theme];
};

const colorFilter = (color: string) => {
  const c = colorList.find(o => o.color === color);
  return c && c.key;
};

export default defineComponent({
  name: 'CustomSettings',
  setup() {
    const store = useStore();

    return {
      navTheme: computed(() => store.getters['app/navTheme']),
      primaryColor: computed(() => store.getters['app/primaryColor']),

      themeFilter,
      colorFilter,
    };
  },
});
</script>
