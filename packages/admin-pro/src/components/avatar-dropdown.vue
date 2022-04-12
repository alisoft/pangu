<template>
  <a-dropdown
    v-if="currentUser && currentUser.nickname"
    class="ant-pro-dropdown ant-pro-dropdown-action"
    placement="bottomRight"
    overlayClassName="pro-components-header-dropdown-index-container"
  >
    <span>
      <a-avatar size="small" :src="currentUser.avatar" class="ant-pro-header-account-avatar" />
      <span class="ant-pro-header-account-name anticon">{{ currentUser.nickname }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-dropdown-menu" :selected-keys="[]">
        <a-menu-item v-if="menu" key="center" @click="handleToCenter">
          <template #icon><user-outlined /></template>
          个人中心
        </a-menu-item>
        <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
          <template #icon><setting-outlined /></template>
          个人设置
        </a-menu-item>
        <a-menu-divider v-if="menu" />
        <a-menu-item key="logout" @click="handleLogout">
          <template #icon><logout-outlined /></template>
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { LOGOUT } from '@/store/modules/user/actions';

export default defineComponent({
  name: 'AvatarDropdown',
  props: {
    currentUser: {
      type: Object,
      default: () => null,
    },
    menu: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const { t } = useI18n();
    const handleToCenter = () => {
      router.push({ path: '/account/center' });
    };
    const handleToSettings = () => {
      router.push({ path: '/account/settings' });
    };
    const handleLogout = () => {
      store.dispatch(`user/${LOGOUT}`).then(() => {
        router.push({ path: '/user/login' });
      });
    };

    return {
      t,
      handleToCenter,
      handleToSettings,
      handleLogout,
    };
  },
  components: {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
  },
});
</script>

<style lang="less">
@import './header-dropdown.less';
.ant-pro-header-account-name {
  vertical-align: unset;
}
.ant-pro-header-account-avatar {
  margin: 12px 8px 12px 0;
  color: @primary-color;
  vertical-align: top;
  background: hsla(0, 0%, 100%, 0.85);
}
</style>
