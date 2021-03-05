<template>
  <div class="iv-p-search-patient">
    <section class="iv-p-search-patient__panel-wrapper row">
      <form class="iv-p-search-patient__panel col-sm-12">
        <div class="iv-p-search-patient__title row">
          <h1 class="title-3">
            {{$tc('searchPatient')}}
          </h1>
        </div>
        <div class="iv-p-search-patient__body row">
          <div class="col-sm-12">
            <base-input-label
              :type="'type'"
              v-model="patientId"
              :text="$tc('patientId')"
            />
          </div>
          <div class="col-sm-2">
            <base-button
              :text="$tc('search')"
              @baseButtonClicked="searchScores"
            />
          </div>
        </div>
      </form>
    </section>
    <section class="iv-p-search-patient__panel-result row">
      <div class="col-sm-12">
        <table-patient
          v-if="scoreList.length > 0"
          :score-list="scoreList"
          @patientScoreListView="goToResultScore"
        />
      </div>
    </section>
    <footer class="iv-p-new-score__panel-footer row between-sm center-sm">
      <base-button v-if="true" class="col-sm-3" :text="'Upload Videos'" />
      <base-button v-if="true" class="col-sm-3" :text="'Rank embryos'" @baseButtonClicked="goToRankEmbryos()"/>
    </footer>
  </div>
</template>

<script>
import TablePatient from '@/components/molecules/TablePatient'

export default {
  name: 'SearchPatient',
  mounted () {
    this.$store.dispatch('app/updateActiveElement', 'mydb')
  },
  components: {
    TablePatient
  },
  data () {
    return {
      patientId: '',
      scoreList: []
    }
  },
  methods: {
    searchScores () {
      // TODO: [REQUEST] to do to get all scores of one client
      this.scoreList.push({
        id: 1,
        date: 'November 22, 2020',
        transfered: '5/5',
        unknownOutcome: '0/5',
        clinicalPregnancy: '3/5',
        birth: '2/5'
      })
    },
    goToResultScore () {
      this.router.push({
        name: ''
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/global';
  .iv-p-search-patient {
    @include panel-base;
    height: calc(100% - 100px);
  }
</style>
