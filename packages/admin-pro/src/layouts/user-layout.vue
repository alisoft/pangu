<template>
  <div class="ant-pro-user-layout">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo" />
            <span class="title">Admin Pro</span>
          </a>
        </div>
        <div class="desc">Admin Pro 是针对 Vue3 语法开发的企业级脚手架</div>
      </div>
      <div class="main-container">
        <a-row style="height: 100%; align-items: center; justify-content: center">
          <a-col :span="12" style="text-align: center; height: 416px">
            <a-carousel>
              <template #customPaging>
                <span class="dot"></span>
              </template>
              <div class="banner-item"><img style="width: 378px" src="@/assets/user/1.png" /></div>
              <div class="banner-item"><img style="width: 378px" src="@/assets/user/2.png" /></div>
              <div class="banner-item"><img style="width: 378px" src="@/assets/user/3.png" /></div>
              <div class="banner-item"><img style="width: 378px" src="@/assets/user/1.png" /></div>
            </a-carousel>
          </a-col>
          <a-col :span="12">
            <div style="margin: 0 40px">
              <h2>登录</h2>
              <p>手机号验证登录</p>
              <a-input-group size="large" compact>
                <a-select size="large" defaultValue="86" style="width: 25%">
                  <a-select-option value="86">+86</a-select-option>
                  <a-select-option value="87">+87</a-select-option>
                </a-select>
                <a-input style="width: 75%" />
              </a-input-group>
              <a-button block size="large" type="primary" style="margin-top: 24px">下一步</a-button>
            </div>
          </a-col>
        </a-row>
      </div>
      <global-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GlobalFooter } from '@/components';

export default defineComponent({
  components: {
    GlobalFooter,
  },
});
</script>

<style lang="less" scoped>
.ant-pro-user-layout {
  height: 100vh;
  background: #f0f2f5;

  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    padding: 110px 0 0;
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

    .main-container {
      width: 1000px;
      min-width: 1000px;
      height: 508px;
      margin: 0 auto;
      background: #ffffff;

      :deep(.slick-active) {
        .dot {
          background-color: #999999;
        }
      }

      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #d8d8d8;
        border-radius: 50%;
      }

      .banner-item {
        height: 416px;
        text-align: center;

        > img {
          height: 394px;
          margin: 0 auto;
        }
      }
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
