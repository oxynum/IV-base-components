<template>
  <div class="iv-p-new-score">
    <section class="iv-p-new-score__panel-wrapper row">
      <div class="iv-p-new-score__panel --left col-sm-3">
        <h1 class="left--title title-3">
          {{$tc('summaryEggRetrieval')}}
        </h1>
        <br>
        <summary-egg-form
          v-if="listSummmaryEgg.length === 0"
          class="summary-egg-padding"
          :cta-texts="loginTexts.ctaTexts"
          :disable-submit-on-load="true"
          @submitSummaryEgg="saveNewScore"
        >
        </summary-egg-form>
        <summary-egg-sum-up
          v-if="listSummmaryEgg.length > 0"

        >
        </summary-egg-sum-up>
      </div>
      <div class="iv-p-new-score__panel --right col-sm-8">
        <upload-panel
          :enable-upload="unableUpload"
        />
        <footer class="iv-p-new-score__panel-footer row between-sm center-sm">
          <base-button
            v-if="unableUpload"
            class="col-sm-3"
            :text="'Upload Videos'"
          />
          <base-button
            v-if="unableUpload"
            class="col-sm-3"
            :text="'Rank embryos'"
          />
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import SummaryEggForm from '@/components/molecules/SummaryEggForm'
import SummaryEggSumUp from '@/components/molecules/SummaryEggSumUp'
import UploadPanel from '@/components/organisms/UploadPanel'

export default {
  name: 'NewScore',
  components: {
    SummaryEggForm,
    UploadPanel,
    SummaryEggSumUp
  },
  mounted () {
    this.$store.dispatch('app/updateActiveElement', 'newscore')
  },
  data () {
    return {
      loginTexts: {
        ctaTexts: {
          main: 'Save',
          secondary: this.$tc('forgetPassword')
        }
      },
      unableUpload: false,
      listSummmaryEgg: []
    }
  },
  methods: {
    saveNewScore (allInputs) {
      this.$store.dispatch('app/openModal', {
        title: this.$tc('warning'),
        contentBody: this.$tc('confirmNewScore1'),
        ctaList: [{
          text: this.$tc('save'),
          callback: () => {
            this.makeSaveSummaryEgg(allInputs)
          }
        }, {
          text: this.$tc('continueEditing'),
          colorClass: 'secondary',
          isEmptyShape: true
        }]
      })
    },
    makeSaveSummaryEgg (...allInputs) {
      console.log(allInputs)
      this.$Progress.start()
      // TODO: Add Request Save method
      this.$Progress.increase(20)
      this.unableUploadComponent()
      allInputs.forEach(inputElement => {
        this.listSummmaryEgg.push(inputElement)
      })
    },
    unableUploadComponent () {
      this.unableUpload = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-p-new-score {
    height: calc(100% - 100px);

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
      &.--right {
        @include no-padding;
      }

      &-footer {
        padding: 15px;
        border-top: 2px solid $color-iv-gray-light-2;
      }

      .iv-o-upload-panel {
        height: 87%;
      }
    }
  }
</style>
