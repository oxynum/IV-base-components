<template>
  <div class="iv-p-change-password">
    <section class="wrapper__form">
      <div class="wrapper__form logo-wrapper">
        <img
          alt="ImVitro"
          class="login-logo"
          src="/img/brand/imvitro-logo.png"
          width="100%"
          height="100%"
        />
      </div>
      <div class="wrapper__form-wrapper">
        <base-alert
          v-if="isErrorForm"
          :type="'error'"
          :text="$tc('confirmAndNewDiffers')"
        />
        <change-password-form
          :cta-texts="formTexts.ctaTexts"
          :disable-submit-on-load="true"
          @submitPassword="resetPassword"
          @submitError="displayError"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ChangePasswordForm from '@/components/molecules/ChangePasswordForm'
import { AuthService } from '@/services/auth.service'

export default {
  name: 'ChangePassword',
  components: {
    ChangePasswordForm
  },
  data () {
    return {
      formTexts: {
        ctaTexts: {
          main: this.$tc('changePassword')
        }
      },
      isErrorForm: false,
      loading: false
    }
  },
  methods: {
    displayError () {
      this.isErrorForm = true
    },
    async resetPassword ({ name, newPassword: password }) {
      try {
        this.isErrorForm = false
        this.loading = true
        await AuthService.updatePassword({
          name: name,
          password: password,
          session: this.$route.params.session,
          userId: this.$route.params.userId
        })
        await this.$store.dispatch('user/getCurrent')
        await this.$router.push('/new-score')
      } catch (error) {
        if (error.status === 401 || error.message.includes('session')) {
          await this.$router.push('/')
        } else {
          this.error = error.message
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/global';

  .iv-p-change-password {
    width: 100%;

    .wrapper__form {
      padding: 20px;

      .logo-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }
    }
  }
</style>
