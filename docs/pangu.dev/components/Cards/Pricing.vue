<template>
  <v-card
    :class="type"
    class="pricing"
  >
    <div class="title-card">
      <p>{{ title }}</p>
      <h4 class="display-1">
        <span v-if="price > 0">$</span>{{ calculatePrice }}
      </h4>
    </div>
    <ul>
      <li v-for="(item, index) in featureList" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="btn-area">
      <p class="desc">{{ desc }}</p>
      <v-btn
        :color="type === 'basic' ? 'secondary' : 'primary'"
        class="button"
        large
      >
        Choose Plan
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    featureList: {
      type: Array,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    calculatePrice() {
      return this.price > 0 ? this.price : 'Free'
    }
  }
}
</script>
