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
    <div class="form-input-wrapper">
      <base-input
        :type="'password'"
        :required="true"
        v-model="pwdConfirmInput"
        id="password-input-confirm"
      />
      <label
        class="base-label small-text"
        :class="{'float-label': isPwdConfirmFill}"
        for="password-input-confirm"
      >
        {{$tc('confirmNewPassword')}}
      </label>
    </div>
    <div class="form-input-wrapper">
      <base-input
        :type="'text'"
        :required="true"
        v-model="codeInput"
        id="confirmation-code"
      />
      <label
        class="base-label small-text"
        :class="{'float-label': isCodeInputFill}"
        for="confirmation-code"
      >
        {{$tc('confirmationSentEmail')}}
      </label>
    </div>
    <base-button
      :text="getMainCTAText"
      :type="'submit'"
      :disabled="!isReadyToSubmit"
      class="login-cta"
    />
  </form>
</template>

<script>
export default {
  name: 'NewPasswordForm',
  data () {
    return {
      emailInput: '',
      pwdInput: '',
      codeInput: '',
      pwdConfirmInput: ''
    }
  },
  props: {
    ctaTexts: {
      type: Object,
      required: true
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
    },
    isPwdConfirmFill () {
      return this.pwdConfirmInput.length > 0
    },
    isCodeInputFill () {
      return this.codeInput.length > 0
    }
  },
  methods: {
    emitRedirectToForgetPage () {
      this.$emit('redirectLinkClicked')
    },
    onSubmit () {
      this.$emit('submitNewPassword', {
        email: this.emailInput,
        code: this.codeInput,
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
