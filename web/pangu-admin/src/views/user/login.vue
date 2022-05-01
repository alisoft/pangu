<template>
  <div class="main">
    <a-form id="formLogin" layout="vertical" class="user-layout-login">
      <a-tabs
        :active-key="customActiveKey"
        :tab-bar-style="{ textAlign: 'center', borderBottom: 'unset' }"
        @change="handleTabClick"
      >
        <a-tab-pane key="password" tab="账号密码登录">
          <a-alert
            v-if="isLoginError"
            type="error"
            show-icon
            style="margin-bottom: 24px"
            message="账户或密码错误"
          />
          <a-form-item v-bind="validateInfos.email">
            <a-input
              size="large"
              v-model:value="modelRef.email"
              placeholder="账户: test@test.com"
              style="width: 100%"
            >
              <template #prefix>
                <user-outlined class="prefixIcon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item v-bind="validateInfos.password">
            <a-input-password
              v-model:value="modelRef.password"
              size="large"
              placeholder="密码: test1234"
            >
              <template #prefix>
                <lock-outlined class="prefixIcon" />
              </template>
            </a-input-password>
          </a-form-item>
        </a-tab-pane>

        <a-tab-pane key="phone" tab="手机号登录">
          <a-form-item v-bind="validateInfos.mobile">
            <a-input v-model:value="modelRef.mobile" size="large" type="text" placeholder="手机号">
              <template #prefix>
                <mobile-outlined class="prefixIcon" />
              </template>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item v-bind="validateInfos.captcha">
                <a-input
                  v-model:value="modelRef.captcha"
                  size="large"
                  type="text"
                  placeholder="验证码"
                >
                  <template #prefix>
                    <mail-outlined class="prefixIcon" />
                  </template>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                class="getCaptcha"
                tabindex="-1"
                :disabled="smsSendBtn"
                @click.stop.prevent="getCaptcha"
              >
                {{ (!smsSendBtn && '获取验证码') || time + ' s' }}
              </a-button>
            </a-col>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="qrcode" tab="二维码登录">
          <div class="qrcode-wrapper">
            <img width="300" height="300" :src="qrcodeUrl" />
          </div>
        </a-tab-pane>
      </a-tabs>

      <a-form-item v-if="customActiveKey !== 'qrcode'">
        <a-checkbox v-model:cheched="modelRef.rememberMe">自动登录</a-checkbox>
        <router-link to="/user/recover" class="forge-password" style="float: right">
          忘记密码
        </router-link>
      </a-form-item>

      <a-form-item v-if="customActiveKey !== 'qrcode'" style="margin-top: 24px">
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="login-button"
          :loading="loginBtn"
          @click="handleSubmit"
        >
          确定
        </a-button>
      </a-form-item>

      <div class="user-login-other">
        <span>其他登录方式</span>
        <a>
          <alipay-circle-outlined class="item-icon" />
        </a>
        <a>
          <taobao-circle-outlined class="item-icon" />
        </a>
        <a>
          <weibo-circle-outlined class="item-icon" />
        </a>
        <router-link class="register" to="/user/register">注册账户</router-link>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { getSmsCaptcha } from '@/api/user/login';
import { message, notification } from 'ant-design-vue/lib';
import { useForm } from 'ant-design-vue/lib/form';
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons-vue';
import type { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import QRCode from 'qrcode';
import { LOGIN } from '@/store/modules/user/actions';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const store = useStore();
    const qrcodeUrl = ref();
    const state = reactive({
      customActiveKey: 'password',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,

      time: 60,
      smsSendBtn: false,
    });

    const handleUsernameOrEmail = (_rule: any, value: any) => {
      return new Promise(resolve => {
        const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if (regex.test(value)) {
          state.loginType = 0;
        } else {
          state.loginType = 1;
        }
        resolve(state.loginType);
      });
    };
    const modelRef = reactive({
      rememberMe: true,
      email: '',
      password: '',
      mobile: '',
      captcha: '',
    });
    const rulesRef = reactive({
      rememberMe: undefined,
      email: [
        { required: true, message: '请输入邮箱地址', type: 'string' },
        { validator: handleUsernameOrEmail, trigger: 'change' },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          type: 'string',
          trigger: ['blur', 'change'],
        },
      ],
      mobile: [
        {
          required: true,
          // pattern: /^1[34578]\d{9}$/,
          message: '请输入正确的手机号',
          trigger: ['blur', 'change'],
        },
      ],
      captcha: [{ required: true, message: '请输入验证码' }],
    });
    const { validateInfos, validate, resetFields } = useForm(modelRef, rulesRef);

    const handleTabClick = (key: string) => {
      state.customActiveKey = key;
      resetFields();
    };

    const requestFailed = (err: AxiosError) => {
      console.log('requestFailed', err?.response?.data?.errorMessage);
      state.isLoginError = true;
      notification.error({
        message: '错误',
        description: ((err.response || {}).data || {}).errorMessage || '请求出现错误，请稍后再试',
        duration: 4,
      });
    };

    const loginSuccess = () => {
      router.push({ path: '/' });
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        notification.success({
          message: '欢迎',
          description: '欢迎回来',
        });
      }, 1000);
      state.isLoginError = false;
    };

    const getCaptcha = (e: Event) => {
      e.preventDefault();

      validate('mobile')
        .then(values => {
          state.smsSendBtn = true;

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60;
              state.smsSendBtn = false;
              window.clearInterval(interval);
            }
          }, 1000);

          const hide = message.loading('验证码发送中..', 0);
          getSmsCaptcha({ mobile: values.mobile })
            .then(res => {
              setTimeout(hide, 2500);
              notification.success({
                message: '提示',
                description: '验证码获取成功，您的验证码为：' + res.captcha,
                duration: 8,
              });
            })
            .catch(err => {
              setTimeout(hide, 1);
              clearInterval(interval);
              state.time = 60;
              state.smsSendBtn = false;
              requestFailed(err);
            });
        })
        .catch(err => {
          console.log('err', err);
        });
    };

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const validateNames =
        state.customActiveKey === 'password'
          ? ['email', 'password']
          : state.customActiveKey === 'phone'
          ? ['mobile', 'captcha']
          : [];
      state.loginBtn = true;
      validate(validateNames)
        .then(values => {
          store
            .dispatch(`user/${LOGIN}`, {
              ...values,
              type: state.customActiveKey,
            })
            .then(() => {
              loginSuccess();
            })
            .catch(err => {
              requestFailed(err);
            })
            .finally(() => {
              state.loginBtn = false;
            });
        })
        .catch((/*err*/) => {
          // 屏蔽错误处理
          // requestFailed(err);
          state.loginBtn = false;
        });
    };
    // this.loginBtn = false;
    // this.stepCaptchaVisible = false;

    let ws: WebSocket;
    onMounted(() => {
      ws = new WebSocket(`${process.env.VUE_APP_WS_URL_PREFIX}/ws`);
      ws.onopen = () => {
        ws.send('something');
      };

      ws.onmessage = data => {
        console.log('received: %s', data);
      };
    });

    onBeforeUnmount(() => {
      ws && ws.close();
    });

    watch(
      () => state.customActiveKey,
      async () => {
        if (state.customActiveKey === 'qrcode') {
          qrcodeUrl.value = await QRCode.toDataURL('text', {
            width: 300,
            type: 'image/webp',
            rendererOpts: { quality: 1 },
          });
        }
      },
    );

    return {
      ...toRefs(state),
      modelRef,
      qrcodeUrl,
      validateInfos,

      handleTabClick,
      handleSubmit,
      getCaptcha,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    MailOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
  },
});
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
  }

  .user-login-other {
    margin-top: 24px;
    line-height: 22px;
    text-align: left;

    .item-icon {
      margin-left: 16px;
      color: @disabled-color;
      font-size: 24px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }

    .register {
      float: right;
    }
  }
  :deep(.qrcode-wrapper) {
    text-align: center;
  }

  .prefixIcon {
    color: @primary-color;
    font-size: @font-size-base;
  }
}
</style>
