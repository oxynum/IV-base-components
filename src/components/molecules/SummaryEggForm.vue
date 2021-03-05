<template>
  <form v-on:submit.prevent="onSubmit" class="iv-m-form-login">
    <div class="form-input-wrapper">
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="patientIdInput"
        :text="$tc('patientId')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="eggRetrievalDateInput"
        :text="$tc('eggRetrievalDate')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="patientAgeInput"
        :text="$tc('patientAgeAtTreatment')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="causeOfInfertilityInput"
        :text="$tc('causeOfInfertility')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="numberFertEggsInput"
        :text="$tc('numberFertilisedEggs')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="numberEggsRetrievedInput"
        :text="$tc('numberOfEggsRetrieved')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="estradiolsLevelInput"
        :text="$tc('estradiolsLevels')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="microscopeTypeInput"
        :text="$tc('microscopeType')"
      />
      <base-input-label
        :type="'text'"
        :req="true"
        v-model="intervalInput"
        :text="$tc('intervalTime')"
      />
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
  name: 'SummaryEggForm',
  data () {
    return {
      patientIdInput: '',
      eggRetrievalDateInput: '',
      patientAgeInput: '',
      causeOfInfertilityInput: '',
      numberFertEggsInput: '',
      numberEggsRetrievedInput: '',
      estradiolsLevelInput: '',
      microscopeTypeInput: '',
      intervalInput: ''
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
      return (this.patientIdInput.length > 0 &&
       this.eggRetrievalDateInput.length > 0 &&
       this.patientAgeInput.length > 0 &&
       this.causeOfInfertilityInput.length > 0 &&
       this.numberFertEggsInput.length > 0 &&
       this.numberEggsRetrievedInput.length > 0 &&
       this.estradiolsLevelInput.length > 0 &&
       this.microscopeTypeInput.length > 0 &&
       this.intervalInput.length > 0)
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitSummaryEgg', {
        patientId: this.patientIdInput,
        eggRetrievalDate: this.eggRetrievalDateInput,
        patientAge: this.patientAgeInput,
        causeOfInfertility: this.causeOfInfertilityInput,
        numberFertEggs: this.numberFertEggsInput,
        numberEggsRetrieved: this.numberEggsRetrievedInput,
        estradiolsLevel: this.estradiolsLevelInput,
        microscopeType: this.microscopeTypeInput,
        interval: this.intervalInput
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
