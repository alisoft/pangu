<template>
  <div class="parallax-wrap">
    <div v-if="loaded" class="inner-parallax extra-small">
      <parallax
        :speed-factor="0.3"
        :section-height="1000"
        direction="up"
      >
        <div class="figure">
          <svg class="triangle">
            <use xlink:href="/images/mobile/triangle.svg#main" />
          </svg>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.2"
        :section-height="1600"
        direction="up"
      >
        <div class="figure">
          <svg class="circle">
            <use xlink:href="/images/mobile/circle.svg#main" />
          </svg>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.15"
        :section-height="1300"
        direction="up"
      >
        <div class="figure">
          <div class="square-dot">
            <svg class="dot-many-small">
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
