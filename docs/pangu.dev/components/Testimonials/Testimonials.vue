<template>
<div class="root">
  <v-container :class="{ fixed: isDesktop }">
    <v-row class="spacing6">
      <v-col md="7" cols="12" class="px-6">
        <div class="slider-wrap">
          <hidden point="smDown">
            <div class="decoration">
              <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                <defs>
                  <linearGradient x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%" id="linearGradient-1">
                    <stop :stop-color="$vuetify.theme.themes.light.primarydark" offset="0%" />
                    <stop :stop-color="$vuetify.theme.themes.light.primary" offset="100%" />
                  </linearGradient>
                </defs>
                <g stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
                  <path d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" id="Oval" fill="url(#linearGradient-1)" />
                </g>
              </svg>
            </div>
          </hidden>
          <h3
            :class="[isMobile ? 'text-center' : 'text-left']"
            class="testi-title use-text-title2">
            {{ $t('saasLanding.testi_title') }}
            <br />
            <strong>
              {{ $t('saasLanding.testi_titlestrong') }}
            </strong>
          </h3>
          <v-icon class="icon">mdi-format-quote-close</v-icon>
          <div v-if="loaded" class="carousel">
            <slick
              ref="slider"
              :options="slickOptions"
              @afterChange="handleAfterChange"
            >
              <div
                v-for="(item, index) in testiContent"
                class="item"
                :key="index"
              >
                <div class="inner">
                  <div class="profile">
                    <v-avatar class="avatar">
                      <img :src="item.avatar" :alt="item.name" />
                    </v-avatar>
                    <h6 class="name">
                      {{ item.name }}
                      <span>
                        {{ item.title }}
                      </span>
                    </h6>
                  </div>
                  <p class="use-text-paragraph">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </v-col>
      <v-col md="5" cols="12" class="use-hidden-sm-down px-6">
        <hidden point="smDown">
          <div class="logo-wrap">
              <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="figure-btn"
              >
                <v-btn
                  @click="gotoSlide(index)"
                  text
                  :class="{ active: currentSlide === index }"
                >
                  <img
                    :src="item.logo"
                    :alt="'logo' + index"
                    :key="index"
                  >
                </v-btn>
              </div>
          </div>
        </hidden>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'

import colors from 'vuetify/lib/util/colors'

const palette = {
  violeta: {
    primary: colors.purple.base, // primary main
    primarylight: colors.purple.lighten4, // primary light
    primarydark: colors.purple.darken3, // primary dark
    secondary: colors.lightGreen.base, // secondary main
    secondarylight: colors.lightGreen.lighten4, // secondary light
    secondarydark: colors.lightGreen.darken3, // secondary dark
    anchor: colors.purple.base // link
  }
}

const theme = {
  ...palette.violeta
}

const testiData = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/agency.png'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/architect.png'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    logo: '/images/logos/cloud.png'
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/starter.png'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    logo: '/images/logos/coin.png'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/fashion.png'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/mobile.png'
  },
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/profile.png'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/saas.png'
  }
]

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    }
  },
  mounted() {
    this.loaded = true
    this.$vuetify.theme.themes = {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    }
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
