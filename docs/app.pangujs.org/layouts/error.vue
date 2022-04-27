<template>
  <v-app>
    <div class="dedicated-page">
      <main-header invert />
      <Error
        :error-code="this.error.statusCode"
        :text="$t('common.404')"
      />
      <main-footer invert />
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.dedicated-page {
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Error from '../components/Error'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.mobile.name + ' - ' + this.pageNotFound
        : brand.mobile.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
