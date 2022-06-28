<template>
  <div class="error-wrap">
    <v-container class="max-lg">
      <v-row>
        <v-col cols="12" sm="5" class="py-0">
          <div class="flex">
            <div class="deco">
              <div class="artwork" v-if="loaded">
                <svg width="218px" height="220px" viewBox="0 0 218 220" version="1.1">
                  <defs>
                    <linearGradient x1="133.772602%" y1="-75.1506777%" x2="21.5997463%" y2="63.260628%" id="linearGradient-1">
                      <stop :stop-color="$vuetify.theme.themes.light.secondary" offset="0%" />
                      <stop :stop-color="$vuetify.theme.themes.light.primary" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="0" fill="none">
                    <path d="M176.484827,177.458465 C132.792561,207.953068 56.006152,234.998281 25.7115142,210.452625 C-15.7311505,176.958554 -0.783796157,131.166659 26.4613814,56.0799491 C46.757789,0.239832833 59.6555061,-25.9055394 163.187181,34.8837009 C235.62436,77.3761797 231.125156,139.365208 176.484827,177.458465 Z" id="Path" fill="url(#linearGradient-1)" fillRule="nonzero" />
                  </g>
                </svg>
              </div>
              <h3>
                {{ errCode }}
              </h3>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7" class="py-0">
          <div class="text">
            <h4 class="display-1">{{ text }}</h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              color="secondary"
              href="/"
              large
              class="button"
            >
              {{ $t('common.back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script>
export default {
  data: () => ({
    loaded: false
  }),
  mounted() {
    this.loaded = true
  },
  props: {
    errCode: {
      type: String,
      default: '404'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
