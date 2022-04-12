<template>
  <a-spin :spinning="loading" wrapperClassName="city-select-row">
    <a-select class="item" v-model:value="state.province" showSearch @select="selectProvinceItem">
      <a-select-option v-for="item in localProvince" :key="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
    <a-select
      class="item"
      :disabled="!state.province"
      v-model:value="state.city"
      showSearch
      @select="selectCityItem"
    >
      <a-select-option v-for="item in loadedCity" :key="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from 'vue';
import localProvince from './geographic/province.json';
import localCity from './geographic/city.json';

export default defineComponent({
  name: 'CitySelect',
  props: {
    province: {
      type: String,
      default: undefined,
    },
    city: {
      type: String,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'update:province', 'update:city'],
  setup(props, { emit }) {
    const state = reactive<{
      province?: string;
      city?: string;
    }>({
      province: undefined,
      city: undefined,
    });
    watch(
      [() => props.province, () => props.city],
      () => {
        state.province = props.province;
        state.city = props.city;
      },
      { immediate: true },
    );
    const loadedCity = computed(() => {
      return (state.province && localCity[state.province as string]) || [];
    });

    const selectProvinceItem = () => {
      state.city = undefined;
      emit('update:province', state.province);
      emit('update:city', undefined);
    };
    const selectCityItem = () => {
      emit('update:city', state.city);
    };

    return {
      state,
      localProvince,
      loadedCity,

      selectProvinceItem,
      selectCityItem,
    };
  },
});
</script>

<style lang="less" scoped>
.city-select-row {
  .item {
    width: 50%;
    max-width: 220px;
  }
  .item:first-child {
    width: ~'calc(50% - 8px)';
    margin-right: 8px;
  }
}

@media screen and (max-width: @screen-sm) {
  .item:first-child {
    margin: 0;
    margin-bottom: 8px;
  }
}
</style>
