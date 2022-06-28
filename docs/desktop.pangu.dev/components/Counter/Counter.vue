<template>
  <div class="counter-wrap">
    <v-container class="max-md">
      <v-row
        justify="center"
        align="center"
        class="counter-inner spacing6"
      >
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                <span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 200,
                    options: { duration: 1 }
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-cloud-download-outline" />
                {{ $t('mobileLanding.counter_downloads') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 480,
                    options: { duration: 1 }
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-checkmark-outline" />
                {{ $t('mobileLanding.counter_transaction') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 180,
                    options: { duration: 1 }
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-star-outline" />
                {{ $t('mobileLanding.counter_ratting') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 200)
  }
}
</script>
