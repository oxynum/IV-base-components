<template>
  <div class="iv-p-login">
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
        <new-password-form
          :cta-texts="newPasswordForm.ctaTexts"
          @submitNewPassword="makeNewPasswordRequest"
        />
      </div>
    </section>
  </div>
</template>

<script>
import NewPasswordForm from '@/components/molecules/NewPasswordForm'
import { AuthService } from '@/services/auth.service'

export default {
  name: 'LoginConfirmNewPassword',
  components: {
    NewPasswordForm
  },
  mounted () {
    // Do not authorize access if user doesn't come
    // from lofin route.
    if (!this.$route.params.email) {
      this.$router.push('/')
    }
  },
  data () {
    return {
      newPasswordForm: {
        ctaTexts: {
          main: this.$tc('save')
        }
      },
      forgetPasswordTexts: {
        ctaTexts: this.$tc('sendNewPassword'),
        placeholder: this.$tc('confirmEmail')
      },
      isForgetPasswordMode: false,
      isErrorLogin: false
    }
  },
  methods: {
    async makeNewPasswordRequest ({ email, code, password: new_password }) {
      try {
        await AuthService.makeConfirmForgotPassword({ email, code, new_password })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/global';

  .iv-p-login {
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
