<template>
  <div class="iv-p-login">
    <section class="wrapper__form">
      <div class="wrapper__form logo-wrapper">
        <base-loading
          v-if="loading"
        />
        <img
          v-else
          alt="ImVitro"
          class="login-logo"
          src="/img/brand/imvitro-logo.png"
          width="100%"
          height="100%"
        />
      </div>
      <div class="wrapper__form-wrapper">
        <base-alert
          v-if="isErrorLogin"
          :type="'error'"
          :text="$tc('errorsEmailAndPassword')"
        />
        <login-form
          v-if="!isForgetPasswordMode"
          :cta-texts="loginTexts.ctaTexts"
          :is-error="isErrorLogin"
          :disable-submit-on-load="true"
          @submitLogin="makeLogin"
          @redirectLinkClicked="activeForgetPassword"
        />
        <forget-password-form
          v-else
          :cta-texts="forgetPasswordTexts.ctaTexts"
          :placeholder="forgetPasswordTexts.placeholder"
          @submitEmail="makeConfirmationRequest"
        />
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from '@/components/molecules/LoginForm'
import ForgetPasswordForm from '@/components/molecules/ForgetPasswordForm'
import { AuthService } from '@/services/auth.service'

export default {
  name: 'Login',
  components: {
    LoginForm,
    ForgetPasswordForm
  },
  data () {
    return {
      loginTexts: {
        ctaTexts: {
          main: this.$tc('login'),
          secondary: this.$tc('forgetPassword')
        }
      },
      forgetPasswordTexts: {
        ctaTexts: this.$tc('sendNewConfirmationCode'),
        placeholder: this.$tc('confirmEmail')
      },
      isForgetPasswordMode: false,
      isErrorLogin: false,
      loading: false
    }
  },
  methods: {
    async makeLogin (emailPassword) {
      const { email, password } = emailPassword
      this.isErrorLogin = false
      try {
        this.loading = true
        const loginResponse = await AuthService.makeLogin({ email, password })
        this.error = ''
        if (loginResponse.data.action && loginResponse.data.action === 'NEW_PASSWORD_REQUIRED') {
          this.$router.push({
            name: 'changepassword',
            params: { session: loginResponse.data.session, userId: loginResponse.data.actionParameters.USER_ID_FOR_SRP }
          })
        } else {
          await this.$store.dispatch('user/getCurrent')
          await this.$router.push('/new-score')
        }
      } catch (error) {
        this.error = error.status === 401
          ? 'Invalid e-mail or password.'
          : error.message
        this.isErrorLogin = true
      } finally {
        this.loading = false
      }
    },
    async makeConfirmationRequest (forgotEmail) {
      try {
        this.isErrorLogin = false
        await AuthService.sendEmailCodeOnForgetPassword({ email: forgotEmail })
        this.$router.push({
          name: 'loginforgetpassword',
          params: {
            email: forgotEmail
          }
        })
      } catch (error) {
        this.error = error.status === 400
          ? 'An error has occured, please try again.'
          : error.message
        this.isErrorLogin = true
      }
    },
    activeForgetPassword () {
      this.isForgetPasswordMode = true
      this.isErrorLogin = false
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
