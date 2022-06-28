<template>
  <div class="root">
    <div v-if="loaded" class="carousel">
      <slick :options="settings">
        <div
          v-for="(item, index) in newsContent"
          :key="index"
        >
          <div class="item">
            <news-card
              :img="item.img"
              :text="item.text"
              :type="item.type"
            />
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import NewsCard from '../Cards/News'

const newsContent = [
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[1],
    type: 'caption_news'
  },
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[2],
    type: 'caption_news'
  },
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[3],
    type: 'caption_event'
  },
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[4],
    type: 'caption_news'
  },
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[5],
    type: 'caption_event'
  },
  {
    text:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photo[6],
    type: 'caption_news'
  }
]

export default {
  components: {
    NewsCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      newsContent: newsContent,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
