<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <section id="home">
          <div id="watched_counter" />
          <banner />
        </section>
        <section id="counter">
          <counter />
        </section>
        <section id="feature" class="space-top">
          <feature />
        </section>
        <section id="showcase">
          <showcase />
        </section>
        <section id="testimonials">
          <testimonials />
        </section>
        <section id="faq" class="space-top-short">
          <faq />
        </section>
        <section class="space-top-short">
          <company-logo />
        </section>
        <section class="space-top-short">
          <news-event />
        </section>
      </div>
      <footer-with-deco />
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-bottom: section-margin(6px);
  }
  @include breakpoints-down(sm) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(sm) {
    margin-top: section-margin($spacing1 * 0.5);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(2px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(2px);
  }
}

.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Banner from '~/components/Banner'
import Counter from '~/components/Counter'
import Feature from '~/components/Feature'
import Showcase from '~/components/Showcase'
import Testimonials from '~/components/Testimonials'
import Faq from '~/components/Faq'
import CompanyLogo from '~/components/CompanyLogo'
import NewsEvent from '~/components/NewsEvent'
import FooterWithDeco from '~/components/Footer/FooterWithDeco'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    Banner,
    Counter,
    Feature,
    Showcase,
    Testimonials,
    CompanyLogo,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification
  },
  head() {
    return {
      title: brand.mobile.name + ' - Home Page'
    }
  }
}
</script>
