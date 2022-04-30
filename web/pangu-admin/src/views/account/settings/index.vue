<template>
  <grid-content>
    <a-card
      :bordered="false"
      :bodyStyle="{ padding: '16px 0', height: '100%' }"
      :style="{ height: '100%' }"
    >
      <div class="account-settings-info-main">
        <div class="account-settings-info-left">
          <a-menu
            :key="menuKey"
            type="inner"
            :mode="mode"
            :style="{ border: '0', width: isMobile ? '100%' : 'auto' }"
            v-model:selectedKeys="selectedKeys"
          >
            <a-menu-item key="/account/settings/base">
              <router-link :to="{ name: 'BaseSettings' }">
                {{ t('pages.account.settings.base.title') }}
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/security">
              <router-link :to="{ name: 'SecuritySettings' }">
                {{ t('pages.account.settings.security.title') }}
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/custom">
              <router-link :to="{ name: 'CustomSettings' }">
                {{ t('pages.account.settings.custom.title') }}
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/binding">
              <router-link :to="{ name: 'BindingSettings' }">
                {{ t('pages.account.settings.binding.title') }}
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/notification">
              <router-link :to="{ name: 'NotificationSettings' }">
                {{ t('pages.account.settings.notification.title') }}
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>{{ t(`${$route.meta.title}`) }}</span>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </a-card>
  </grid-content>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  watch,
  inject,
  ref,
  computed,
  onActivated,
} from 'vue';
import { GridContent } from '@/components';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AccountSettings',
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const state = reactive<{
      selectedKeys: string[];
    }>({
      selectedKeys: [],
    });

    // 在keepalive下，神奇的bug，用唯一 key 临时解决
    // https://git.antdv.com/pro-vip/pro-vip/issues/48
    const menuKey = ref(1);
    onActivated(() => {
      menuKey.value++;
    });

    const updateCurrentSelectMenu = () => {
      const allMatched = route.matched.concat();
      state.selectedKeys = allMatched.map(item => item.path);
    };

    onMounted(() => {
      updateCurrentSelectMenu();

      watch(
        () => route.fullPath,
        () => {
          updateCurrentSelectMenu();
        },
      );
    });
    const isMobile = inject('isMobile', ref(false));
    return {
      menuKey,
      t,
      isMobile,
      mode: computed(() => (isMobile.value ? 'horizontal' : 'vertical')),
      ...toRefs(state),
    };
  },
  components: { GridContent },
});
</script>

<style lang="less" scoped>
.account-settings-info-main {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;

  &.mobile {
    display: block;

    .account-settings-info-left {
      width: 100%;
      height: 50px;
      overflow-x: auto;
      overflow-y: scroll;
      border-right: unset;
      border-bottom: 1px solid @border-color-split;
    }
    .account-settings-info-right {
      padding: 20px 40px;
    }
  }

  .account-settings-info-left {
    width: 224px;
    border-right: 1px solid @border-color-split;
  }

  .account-settings-info-right {
    flex: 1 1;
    padding: 8px 40px;

    .account-settings-info-title {
      margin-bottom: 12px;
      color: @text-color;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
    .account-settings-info-view {
      padding-top: 12px;
    }
  }
}
@media screen and (max-width: 768px) {
  .account-settings-info-main {
    flex-direction: column;
    .account-settings-info-left {
      width: 100%;
      border-right: none;
    }
  }
}
</style>
