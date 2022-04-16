<template>
  <div class="main user-layout-register">
    <h3><span>注册</span></h3>
    <a-form id="formRegister" layout="vertical">
      <a-form-item v-bind="validateInfos.email">
        <a-input
          size="large"
          type="text"
          placeholder="邮箱"
          v-model:value="modelRef.email"
        />
      </a-form-item>
      <a-popover
        placement="rightTop"
        :trigger="['focus']"
        :get-popup-container="(trigger) => trigger.parentElement"
        v-model:visible="state.passwordLevelChecked"
      >
        <template v-slot:content>
          <div :style="{ width: '240px' }">
            <div :class="['user-register', passwordLevelClass]">
              强度：
              <span>{{ passwordLevelName }}</span>
            </div>
            <a-progress
              :percent="state.percent"
              :show-info="false"
              :stroke-color="passwordLevelColor"
            />
            <div style="margin-top: 10px">
              <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
            </div>
          </div>
        </template>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password
            size="large"
            @click="handlePasswordInputClick"
            placeholder="至少6位密码，区分大小写"
            v-model:value="modelRef.password"
          />
        </a-form-item>
      </a-popover>

      <a-form-item v-bind="validateInfos.password2">
        <a-input-password
          size="large"
          placeholder="确认密码"
          v-model:value="modelRef.password2"
        />
      </a-form-item>

      <a-form-item v-bind="validateInfos.mobile">
        <a-input
          size="large"
          placeholder="11 位手机号"
          v-model:value="modelRef.mobile"
        >
          <template #addonBefore>
            <a-select size="large" default-value="+86">
              <a-select-option value="+86">+86</a-select-option>
              <a-select-option value="+87">+87</a-select-option>
            </a-select>
          </template>
        </a-input>
      </a-form-item>

      <a-row :gutter="16">
        <a-col class="gutter-row" :span="16">
          <a-form-item v-bind="validateInfos.captcha">
            <a-input
              size="large"
              type="text"
              placeholder="验证码"
              v-model:value="modelRef.captcha"
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
            size="large"
            :disabled="state.smsSendBtn"
            @click.stop.prevent="getCaptcha"
          >
            {{ (!state.smsSendBtn && "获取验证码") || state.time + " s" }}
          </a-button>
        </a-col>
      </a-row>

      <a-form-item>
        <a-button
          size="large"
          type="primary"
          class="register-button"
          :loading="state.registerBtn"
          @click.stop.prevent="handleSubmit"
          :disabled="state.registerBtn"
        >
          注册
        </a-button>
        <router-link class="login" :to="{ name: 'login' }"
          >使用已有账户登录</router-link
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useForm } from "ant-design-vue/lib/form";
import { message, notification } from "ant-design-vue/lib";
import { MailOutlined } from "@ant-design/icons-vue";
import { getSmsCaptcha } from "@/api/user/login";
import { postRegister } from "@/api/user/register";
import type { AxiosError } from "axios";
import { useRouter } from "vue-router";

const levelNames: Record<number, string> = {
  0: "低",
  1: "低",
  2: "中",
  3: "强",
};
const levelClass: Record<number, string> = {
  0: "error",
  1: "error",
  2: "warning",
  3: "success",
};
const levelColor: Record<number, string> = {
  0: "#ff0000",
  1: "#ff0000",
  2: "#ff7e05",
  3: "#52c41a",
};

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      time: 60,
      smsSendBtn: false,
      passwordLevel: 0,
      passwordLevelChecked: false,
      percent: 10,
      progressColor: "#FF0000",
      registerBtn: false,
    });
    const modelRef = reactive({
      email: "",
      password: "",
      password2: "",
      mobile: "",
      captcha: "",
    });
    const rulesRef = reactive({
      email: [
        {
          required: true,
          type: "email",
          message: "请输入邮箱地址",
          trigger: ["change", "blur"],
        },
      ],
      password: [
        { required: true, message: "至少6位密码，区分大小写" },
        {
          validator: (_rule: any, value: any) => {
            return new Promise((resolve, reject) => {
              let level = 0;

              // 判断这个字符串中有没有数字
              if (/[0-9]/.test(value)) {
                level++;
              }
              // 判断字符串中有没有字母
              if (/[a-zA-Z]/.test(value)) {
                level++;
              }
              // 判断字符串中有没有特殊符号
              if (/[^0-9a-zA-Z_]/.test(value)) {
                level++;
              }
              state.passwordLevel = level;
              state.percent = level * 30;
              if (level >= 2) {
                if (level >= 3) {
                  state.percent = 100;
                }
                resolve(null);
              } else {
                if (level === 0) {
                  state.percent = 10;
                }
                reject(new Error("密码强度不够"));
              }
            });
          },
        },
      ],
      password2: [
        { required: true, message: "至少6位密码，区分大小写" },
        {
          validator: (_rule: any, value: string) => {
            return new Promise((resolve, reject) => {
              const password = modelRef.password;
              if (value === undefined) {
                reject(new Error("请输入密码"));
              }
              if (value && password && value.trim() !== password.trim()) {
                reject(new Error("两次密码不一致"));
              }
              resolve(null);
            });
          },
        },
      ],
      mobile: [
        {
          required: true,
          message: "请输入正确的手机号",
          pattern: /^1[3456789]\d{9}$/,
        },
      ],
      captcha: [{ required: true, message: "请输入验证码" }],
    });
    const { validateInfos, validate } = useForm(modelRef, rulesRef);

    const requestFailed = (err: AxiosError) => {
      state.registerBtn = true;
      notification.error({
        message: "错误",
        description:
          ((err.response || {}).data || {}).errorMessage ||
          "请求出现错误，请稍后再试",
        duration: 4,
      });
    };
    const handlePasswordInputClick = () => {
      state.passwordLevelChecked = true;
    };

    const getCaptcha = () => {
      validate("mobile").then((values) => {
        state.smsSendBtn = true;
        const interval = window.setInterval(() => {
          if (state.time-- <= 0) {
            state.time = 60;
            state.smsSendBtn = false;
            window.clearInterval(interval);
          }
        }, 1000);

        const hide = message.loading("验证码发送中..", 0);

        getSmsCaptcha({ mobile: values.mobile })
          .then((res) => {
            setTimeout(hide, 2500);
            notification.success({
              message: "提示",
              description: "验证码获取成功，您的验证码为：" + res.captcha,
              duration: 8,
            });
          })
          .catch((err) => {
            setTimeout(hide, 1);
            clearInterval(interval);
            state.time = 60;
            state.smsSendBtn = false;
            requestFailed(err);
          });
      });
    };

    const handleSubmit = (e: Event) => {
      state.registerBtn = true;
      e.preventDefault();
      validate()
        .then((values) => {
          postRegister(values)
            .then((res) => {
              state.registerBtn = false;
              message.info("注册成功");
              router.push({
                name: "register-result",
                params: {
                  email: res.data.email,
                },
              });
            })
            .catch((err: AxiosError<any>) => {
              requestFailed(err);
              state.registerBtn = false;
            });
        })
        .catch((err) => {
          console.warn("err", err);
          state.registerBtn = false;
        });
    };
    return {
      state,
      modelRef,
      validateInfos,
      handleSubmit,
      getCaptcha,
      handlePasswordInputClick,

      passwordLevelClass: computed(() => levelClass[state.passwordLevel]),
      passwordLevelName: computed(() => levelNames[state.passwordLevel]),
      passwordLevelColor: computed(() => levelColor[state.passwordLevel]),
    };
  },
  components: {
    MailOutlined,
  },
});
</script>

<style lang="less" scoped>
.user-layout-register {
  & > h3 {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .register-button {
    width: 50%;
  }

  .login {
    float: right;
    line-height: 40px;
  }
  .prefixIcon {
    color: @primary-color;
    font-size: @font-size-base;
  }
}
</style>
