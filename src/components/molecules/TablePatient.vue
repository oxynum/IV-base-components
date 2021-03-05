<template>
  <div class="iv-m-table-patient">
    <table>
      <thead>
        <tr class="row start-sm">
          <th class="col-sm-1">
          </th>
          <th class="embryo-id col-sm-2 title-3">
            {{$tc('eggRetrievalDate')}}
          </th>
          <th class="video-name col-sm-2 align-start title-3">
            {{$tc('transfered')}}
          </th>
          <th class="embryo-id col-sm-2 title-3">
            {{$tc('unknownOutcome')}}
          </th>
          <th class="video-name col-sm-2 align-start title-3">
            {{$tc('clinicalPregnancy')}}
          </th>
          <th class="video-name col-sm-2 align-start title-3">
            {{$tc('birth')}}
          </th>
          <th class="video-name col-sm-1 align-start title-3">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="list-element row start-sm" v-for="score in scoreList" :key="score.id">
          <td class="col-sm-1">
            <base-button
              :text="'View'"
              @baseButtonClicked="emitViewButtonClicked(score.id)"
            />
          </td>
          <td class="video-name-field col-sm-2 body-1">
            {{score.date}}
          </td>
          <td class="video-name-field col-sm-2 body-1">
            {{score.transfered}}
          </td>
          <td class="video-name-field col-sm-2 body-1">
            {{score.unknownOutcome}}
          </td>
          <td class="video-name-field col-sm-2 body-1">
            {{score.clinicalPregnancy}}
          </td>
          <td class="video-name-field col-sm-2 body-1">
            {{score.birth}}
          </td>
          <td class="action-field col-sm-1">
            <base-icon :icon-name="'iv-icon-delete'"></base-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TablePatient',
  props: {
    patient: {
      type: Array,
      required: true
    }
  },
  methods: {
    emitViewButtonClicked (id) {
      this.$emit('patientScoreListView', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-m-table-patient {

    table {
      width: 100%;

      tbody {
        overflow-y: scroll;
        max-height: 100px;
      }

      .embryo-id {
        display: flex;
        color: $color-iv-gray-light;
      }

      .list-element {
        border-top: 1px solid #EBEFF2;
        border-bottom: 1px solid #EBEFF2;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: #F3F3FF;
        }

        .id-wrapper {
          padding: 5px;
          border: 1px solid grey;
          border-radius: 4px;
          background: white;
          margin: 0 auto;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .video-name {
        display: flex;
        color: $color-iv-gray-light;

        &-field {
          color: #5C557E;
        }
      }

      .action-field {
        display: flex;
        justify-content: flex-end;
        font-size: 20px;

        i {
          cursor: pointer;
          &:hover {
            -webkit-text-fill-color: $color-iv-font-primary;
          }
          &.--error {
            -webkit-text-fill-color: $color-iv-secondary;
          }
        }
      }
    }
  }

</style>
