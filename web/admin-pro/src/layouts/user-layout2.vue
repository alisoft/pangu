<template>
  <div id="userLayout" :class="['user-layout-wrapper']">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo" />
            <span class="title">Admin Pro</span>
          </a>
        </div>
        <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
      </div>

      <router-view />

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">Copyright &copy; 2020 上海偲诺软件科技中心出品</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'UserLayout',
  setup() {
    onMounted(() => {
      document.body.classList.add('userLayout');
    });
    onUnmounted(() => {
      document.body.classList.remove('userLayout');
    });

    return {};
  },
});
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        width: 98%;
        max-width: 368px;
      }
    }
  }

  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    padding: 110px 0 144px;
    background-image: url(~@/assets/background.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          margin-top: -10px;
          margin-left: -12px;
          line-height: 1;
          vertical-align: middle;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          margin-right: 16px;
          vertical-align: top;
          border-style: none;
        }

        .title {
          position: relative;
          top: 2px;
          color: @text-color;
          font-weight: 600;
          font-size: 33px;
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        }
      }
      .desc {
        margin-top: 12px;
        margin-bottom: 40px;
        color: @text-color-secondary;
        font-size: 14px;
      }
    }

    .main {
      width: 368px;
      min-width: 260px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      margin: 48px 0 24px;
      padding: 0 16px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: @text-color-secondary;
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: @text-color-secondary;
        font-size: 14px;
      }
    }
  }
}
</style>
