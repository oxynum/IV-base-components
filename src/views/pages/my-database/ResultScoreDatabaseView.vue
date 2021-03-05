<template>
  <div class="iv-p-result-score-database">
    <section class="iv-p-result-score-database__panel-wrapper row">
      <div class="iv-p-result-score-database__panel --left col-sm-3">
        <h1 class="left--title title-3">
          {{$tc('summaryEggRetrieval')}}
        </h1>
        <br>
        <summary-egg-sum-up/>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="iv-p-result-score-database__panel --right col-sm-12">
            <table-scores />
          </div>
          <br>
          <div class="iv-p-result-score-database__panel --right col-sm-5">
            <apexchart type="scatter" height="350" :options="chartOptions" :series="series"></apexchart>
          </div>
          <div class="iv-p-result-score-database__panel --right col-sm-6">
            <apexchart type="donut" :options="chartOptionsDonut" :series="seriesDonut"></apexchart>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SummaryEggSumUp from '@/components/molecules/SummaryEggSumUp'
import TableScores from '@/components/molecules/TableScores'

export default {
  name: 'ResultScoreDatabaseView',
  mounted () {
    this.$store.dispatch('app/updateActiveElement', 'mydb')
    this.patientId = this.$route.params.id ? this.$route.params.id : ''
  },
  data () {
    return {
      series: [{
        name: 'SAMPLE A',
        data: [
          [16.4, 5.4]]
      }, {
        name: 'SAMPLE B',
        data: [
          [36.4, 13.4]]
      }, {
        name: 'SAMPLE C',
        data: [
          [21.7, 3]]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
      },
      chartOptionsDonut: {
        chart: {
          type: 'donut'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      seriesDonut: [44, 55, 41, 17, 15]
    }
  },
  components: {
    SummaryEggSumUp,
    TableScores
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/global';

  .iv-p-result-score-database {
    &__panel-wrapper {
      height: 100%;
    }

    &__panel {
      @include panel-base;

      &.--left {
        @include no-padding;

        .left--title {
          padding: 1em 0 0 1em;
        }

        .summary-egg-padding {
          padding: 0 1em;
        }
      }
    }
  }
</style>
