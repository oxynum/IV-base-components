<template>
  <form v-on:submit.prevent="onSubmit" class="iv-m-form-change-password">
    <div class="form-input-wrapper">
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="nameInput"
        :text="$tc('fullName')"
      />
      <base-input-label
        :type="'password'"
        :req="true"
        v-model="newPasswordIdInput"
        :text="$tc('newPassword')"
      />
      <base-input-label
        :type="'password'"
        :req="true"
        v-model="confirmNewPasswordInput"
        :text="$tc('confirmNewPassword')"
      />
      <base-button
        :text="getMainCTAText"
        :type="'submit'"
        :disabled="!isReadyToSubmit"
        class="login-cta"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SummaryEggForm',
  data () {
    return {
      nameInput: '',
      newPasswordIdInput: '',
      confirmNewPasswordInput: ''
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
      return (this.isInputListFill)
    },
    isInputListFill () {
      return (this.newPasswordIdInput.length > 0 && this.confirmNewPasswordInput.length > 0 && this.nameInput.length > 0)
    }
  },
  methods: {
    onSubmit () {
      if (this.newPasswordIdInput !== this.confirmNewPasswordInput) {
        this.$emit('submitError', {
          msg: 'NOTEQUAL'
        })
      } else {
        this.$emit('submitPassword', {
          name: this.nameInput,
          newPassword: this.newPasswordIdInput
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .iv-m-change-password {
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
        transition: border-color 0.2s ease;
        margin-top: 5px;

        & + .float-label {
          transition: .2s ease;
          transform: translate(0, -4.5rem);
          opacity: 1;
        }
      }
    }
  }
</style>
