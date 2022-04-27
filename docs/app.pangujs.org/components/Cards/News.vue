<template>
  <div class="news" :class="type">
    <figure>
      <img :src="img" alt="thumb">
    </figure>
    <v-card class="desc">
      <div class="text">
        <p class="type caption">
          {{ caption }}
        </p>
        <p>{{ text }}</p>
      </div>
      <v-btn text class="btn">
        Read more
      </v-btn>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
