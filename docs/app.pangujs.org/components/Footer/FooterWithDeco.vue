<template>
  <div class="footer-deco">
    <svg class="deco-top back">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <svg class="deco-top cover">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <div class="decoration" />
    <div class="action">
      <h4 class="use-text-subtitle">
        {{ $t('mobileLanding.footer_text') }}
      </h4>
      <div class="btn-area">
        <nuxt-link to="/">
          <img src="/images/mobile/app-store.png" alt="app store" />
        </nuxt-link>
        <nuxt-link to="/">
          <img src="/images/mobile/play-store.png" alt="play store" />
        </nuxt-link>
      </div>
    </div>
    <footer-main />
  </div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Footer from './Footer'

export default {
  components: {
    'footer-main': Footer
  }
}
</script>
