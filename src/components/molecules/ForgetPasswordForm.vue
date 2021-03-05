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
        {{placeholder}}
      </label>
    </div>
    <base-button
      :text="ctaTexts"
      :type="'submit'"
      :disabled="!isReadyToSubmit"
      class="login-cta"
    />
  </form>
</template>

<script>
export default {
  name: 'ForgetPasswordForm',
  data () {
    return {
      emailInput: '',
      pwdInput: ''
    }
  },
  props: {
    ctaTexts: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  computed: {
    isReadyToSubmit () {
      return (this.isEmailFill)
    },
    isEmailFill () {
      return this.emailInput.length > 0
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitEmail', this.emailInput)
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
