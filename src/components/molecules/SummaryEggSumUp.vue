<template>
  <div class="iv-m-summary-egg-sumup">
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('patientId')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('eggRetrievalDate')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('patientAgeAtTreatment')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('causeOfInfertility')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('numberFertilisedEggs')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('numberOfEggsRetrieved')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('estradiolsLevels')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('microscopeType')}}</label>
    </div>
    <div class="iv-m-summary-egg-sumup-item">
      <span class="small-text">30001</span>
      <label class="body-1">{{$tc('intervalTime')}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SummaryEggForm',
  props: {
    textList: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .iv-m-summary-egg-sumup {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;

    &-item {
      margin-top: 15px;
      border-bottom: 1px solid #EBEFF2;
      padding-bottom: 15px;
      padding-left: 25px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
</style>
