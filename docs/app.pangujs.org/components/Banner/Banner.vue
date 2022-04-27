<template>
  <div class="root">
    <div class="background">
      <div class="gradient">
        <div class="deco-wave" />
        <hidden point="smDown">
          <div class="deco-line" />
        </hidden>
        <div class="deco-inner">
          <canvas id="particle_art_mobile" width="500" height="700" />
          <script type="text/javascript" src="/scripts/particles-spray.js"></script>
        </div>
      </div>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <v-row>
        <v-col md="7" cols="12" class="px-3">
          <div class="text">
            <h3 class="use-text-title">
              {{ $t('mobileLanding.banner_title') }}
              <strong>
                {{ $t('mobileLanding.banner_titlestrong') }}
              </strong>
            </h3>
            <h5 class="use-text-subtitle">
              {{ $t('mobileLanding.banner_desc') }}
            </h5>
            <div class="btn-area">
              <nuxt-link to="/">
                <img src="/images/mobile/app-store.png" alt="app store" />
              </nuxt-link>
              <nuxt-link to="/">
                <img src="/images/mobile/play-store.png" alt="play store" />
              </nuxt-link>
              <div id="watched_counter" />
            </div>
          </div>
        </v-col>
        <v-col md="5" cols="12" class="px-3">
          <div class="decoration">
            <div class="phone-illustration">
              <img :src="imgAPI.mobile[0]" class="phone" alt="illustration" />
              <hidden point="mdDown">
                <img :src="imgAPI.mobile[1]" class="widget-top fragment-fadeUp" alt="illustration" />
                <img :src="imgAPI.mobile[2]" class="widget-left fragment-fadeUp" alt="illustration" />
                <img :src="imgAPI.mobile[3]" class="widget-right fragment-fadeUp" alt="illustration" />
              </hidden>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      link: link,
      imgAPI: imgAPI
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
