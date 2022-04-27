<template>
  <div class="root">
    <div class="deco-bg-top" />
    <div class="parallax-event">
      <parallax-large />
    </div>
    <title-main align="center">
      {{ $t('mobileLanding.news_title') }}
    </title-main>
    <p align="center" class="use-text-subtitle2">
      {{ $t('mobileLanding.news_desc') }}
    </p>
    <div class="blog-wrap">
      <v-container class="fixed-width">
        <v-row class="spacing6 list-news">
          <v-col md="6" cols="12" class="pa-6">
            <news-card
              :img="imgAPI.photo[11]"
              type="potrait"
              caption="headline"
              text="Sed imperdiet enim ligula, vitae viverra justo."
            />
          </v-col>
          <v-col md="6" cols="12" class="pa-6">
            <news-card
              :type="isMobile ? 'potrait' : 'landscape'"
              :img="imgAPI.photo[1]"
              caption="news"
              text="Sed imperdiet enim ligula, vitae viverra justo."
            />
            <news-card
              :type="isMobile ? 'potrait' : 'landscape'"
              :img="imgAPI.photo[2]"
              caption="news"
              text="Sed imperdiet enim ligula, vitae viverra justo."
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import NewsCard from '../Cards/News'
import Title from '../Title'
import ParallaxLarge from '../Parallax/Large'

export default {
  components: {
    NewsCard,
    ParallaxLarge,
    'title-main': Title
  },
  data: () => ({
    imgAPI: imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
