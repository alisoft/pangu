<template>
  <div class="theme-color">
    <div class="theme-color-content">
      <template v-for="{ color, key } in colorList" :key="color">
        <a-tooltip :title="t(`app.setting.themecolor.${key}`)">
          <div
            class="theme-color-block"
            :style="{ backgroundColor: color }"
            @click="onChange(color)"
          >
            <template v-if="value === color">
              <check-outlined />
            </template>
          </div>
        </a-tooltip>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { CheckOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'ThemeColor',
  props: {
    colorList: Array as PropType<
      {
        key: string;
        color: string;
      }[]
    >,
    value: String,
    onChange: Function as PropType<(color: string) => void>,
  },
  setup(props) {
    console.log(props);
    const { t } = useI18n();
    return {
      t,
    };
  },
  components: {
    CheckOutlined,
  },
});
</script>
<style lang="less" scoped>
.theme-color {
  margin-top: 16px;
  overflow: hidden;
  .theme-color-title {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 22px;
  }
  .theme-color-block {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 8px;
    margin-right: 8px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
