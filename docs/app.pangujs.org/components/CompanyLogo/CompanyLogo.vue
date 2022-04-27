<template>
  <v-container class="fixed-width">
    <h4 class="text-center use-text-title2">
      {{ $t('mobileLanding.company_title') }}
    </h4>
    <u-animate-container>
      <u-animate
        :offset="-200"
        name="fadeInUpShort"
        delay="0.3s"
        duration="0.5s"
      >
        <div class="root">
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            :alt="'logo' + index"
          >
        </div>
      </u-animate>
    </u-animate-container>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
export default {
  data() {
    return {
      logos: [
        '/images/logos/architect.png',
        '/images/logos/cloud.png',
        '/images/logos/coin.png',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/saas.png'
      ]
    }
  }
}
</script>
