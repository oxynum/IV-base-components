<template>
  <form v-on:submit.prevent="onSubmit" class="iv-m-form-login">
    <div class="form-input-wrapper">
      <base-input
        :type="'text'"
        :required="true"
        v-model="emailInput"
        id="email-input"
      />
      <label
        class="base-label small-text"
        :class="{'float-label': isEmailFill}"
        for="email-input"
      >
        {{$tc('email')}}
      </label>
    </div>
    <div class="form-input-wrapper">
      <base-input
        :type="'password'"
        :required="true"
        v-model="pwdInput"
        id="password-input"
      />
      <label
        class="base-label small-text"
        :class="{'float-label': isPwdFill}"
        for="password-input"
      >
        {{$tc('password')}}
      </label>
    </div>
    <base-button
      :text="getMainCTAText"
      :type="'submit'"
      :disabled="!isReadyToSubmit"
      class="login-cta"
    />
    <br>
    <base-link
      :text="$tc('forgetPassword')"
      @baseLinkClicked="emitRedirectToForgetPage"
    />
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      emailInput: '',
      pwdInput: ''
    }
  },
  props: {
    ctaTexts: {
      type: Object,
      required: true
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getMainCTAText () {
      return this.ctaTexts.main
    },
    isReadyToSubmit () {
      return (this.isEmailFill && this.isPwdFill)
    },
    getSecondaryCTAText () {
      return this.ctaTexts.secondary
    },
    isEmailFill () {
      return this.emailInput.length > 0
    },
    isPwdFill () {
      return this.pwdInput.length > 0
    }
  },
  methods: {
    emitRedirectToForgetPage () {
      this.$emit('redirectLinkClicked')
    },
    onSubmit () {
      this.$emit('submitLogin', {
        email: this.emailInput,
        password: this.pwdInput
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .iv-m-form-login {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    .form-input-wrapper {
      width: 100%;

      .base-label {
        display: block;
        width: fit-content;
        transition: .2s ease;
        transform: translate(0, -2.60rem);
        opacity: 0.4;
      }

      .iv-a-input {
        margin: 10px 0;
        transition: border-color 0.2s ease;

        & + .float-label {
          transition: .2s ease;
          transform: translate(0, -4.5rem);
          opacity: 1;
        }
      }
    }
  }
</style>
