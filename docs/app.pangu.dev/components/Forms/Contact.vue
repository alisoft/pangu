<template>
  <div class="page-wrap">
     <hidden point="smDown">
      <div class="background">
        <div class="gradient">
          <div class="deco-wave" />
          <div class="deco-line" />
          <div class="deco-inner">
            <img src="/images/mobile/animation-banner.png" alt="decoration" />
          </div>
        </div>
      </div>
    </hidden>
    <div class="parallax">
      <parallax-deco />
    </div>
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.mobile.home">
          <img :src="logo" alt="logo">
          <span class="use-text-title">
            {{ brand.mobile.projectName }}
          </span>
        </nuxt-link>
      </div>
    </hidden>
    <v-container class="inner-wrap max-md">
      <v-btn
        :href="routeLink.mobile.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-round-back-outline" />
      </v-btn>
      <v-card class="form-box fragment-fadeUp">
        <div class="full-form-wrap">
          <h3 class="use-text-title title-contact pb-3 text-center">
            {{ $t('common.contact_title2') }}
          </h3>
          <p class="desc use-text-subtitle2 text-center">
            {{ $t('common.contact_subtitle') }}
          </p>
          <div class="form">
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-row class="spacing6">
                <v-col cols="12" sm="6" class="py-0 px-6">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="$t('common.form_name')"
                    class="input"
                    color="secondary"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" class="py-0 px-6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('common.form_email')"
                    class="input"
                    color="secondary"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" class="py-0 px-6">
                  <v-text-field
                    v-model="phone"
                    :label="$t('common.form_phone')"
                    class="input"
                    color="secondary"
                    filled
                  />
                </v-col>
                <v-col cols="12" sm="6" class="py-0 px-6">
                  <v-text-field
                    v-model="company"
                    :label="$t('common.form_company')"
                    class="input"
                    color="secondary"
                    filled
                  />
                </v-col>
                <v-col cols="12" class="py-0 px-6">
                  <v-textarea
                    v-model="message"
                    rows="6"
                    class="input"
                    color="secondary"
                    filled
                    :label="$t('common.form_message')"
                  />
                </v-col>
              </v-row>
              <div class="btn-area flex">
                <div class="form-control-label">
                  <v-checkbox
                    v-model="checkbox"
                    color="secondary"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    :label="$t('common.form_terms')"
                    class="white-label check-label"
                    required
                  />
                  <span>
                    <a href="#" class="link">
                      {{ $t('common.form_privacy') }}
                    </a>
                  </span>
                </div>
                <v-btn
                  :block="isMobile"
                  color="secondary"
                  @click="validate"
                  large
                >
                  {{ $t('common.form_send') }}
                  <v-icon class="right-icon">mdi-send</v-icon>
                </v-btn>
              </div>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/mobile-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import ParallaxDeco from '../Parallax/Large'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    ParallaxDeco
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
