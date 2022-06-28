<template>
  <div class="parallax-wrap">
    <div v-if="loaded" class="inner-parallax medium">
      <parallax
        :speed-factor="0.1"
        :section-height="300"
        direction="down"
      >
        <div class="figure">
          <svg class="triangle">
            <use xlink:href="/images/mobile/triangle.svg#main" />
          </svg>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.15"
        :section-height="300"
        direction="down"
      >
        <div class="figure">
          <svg class="circle">
            <use xlink:href="/images/mobile/circle.svg#main" />
          </svg>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.15"
        :section-height="400"
        direction="down"
      >
        <div class="figure">
          <div class="square-dot">
            <svg class="dot-many">
              <use xlink:href="/images/mobile/dot-many.svg#main" />
            </svg>
          </div>
        </div>
      </parallax>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
