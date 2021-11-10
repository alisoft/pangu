<template>
  <div class="loading-wrapper">
    <span class="loading">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </span>
    <span class="tips">{{ t("loading") }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Loading",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style scoped lang="scss">
.loading-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .loading {
    display: inline-block;
    position: relative;
    height: 20px;
    width: 40px;
    vertical-align: middle;
    & > * {
      position: absolute;
      top: 5px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fe9401;
      opacity: 0.6;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      &:nth-child(1) {
        left: 0;
        -webkit-animation: loading-move 1.3s infinite ease-in;
        animation: loading-move 1.3s infinite ease-in;
      }
      &:nth-child(2) {
        left: 12px;
        -webkit-animation: loading-move 1.3s 0.3s infinite ease-in;
        animation: loading-move 1.3s 0.3s infinite ease-in;
      }
      &:nth-child(3) {
        left: 24px;
        -webkit-animation: loading-move 1.3s 0.6s infinite ease-in;
        animation: loading-move 1.3s 0.6s infinite ease-in;
      }
    }
    & > :first-child {
      left: 0;
      -webkit-animation: loading-move 1.3s ease-in infinite;
      animation: loading-move 1.3s ease-in infinite;
    }
    & > :nth-child(2) {
      left: 12px;
      -webkit-animation: loading-move 1.3s ease-in 0.3s infinite;
      animation: loading-move 1.3s ease-in 0.3s infinite;
    }
    & > :nth-child(3) {
      left: 24px;
      -webkit-animation: loading-move 1.3s ease-in 0.6s infinite;
      animation: loading-move 1.3s ease-in 0.6s infinite;
    }
    .tips {
      color: #fe9401;
    }
  }
  @-webkit-keyframes loading-move {
    0%,
    80%,
    to {
      opacity: 0.6;
      -webkit-transform: scale(0.4);
    }
    40% {
      opacity: 1;
      -webkit-transform: scale(1);
    }
  }

  @keyframes loading-move {
    0%,
    80%,
    to {
      opacity: 0.6;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }
    40% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
