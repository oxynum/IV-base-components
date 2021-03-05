<template>
  <div class="iv-m-table-patient">
    <table>
      <thead>
        <tr class="row start-sm">
          <th class="embryo-id col-sm-1 subtitle-2">
            Embryo ID
          </th>
          <th class="col-sm-2">
          </th>
          <th class="video-name col-sm-2 align-start subtitle-2">
            Transfered
          </th>
          <th class="embryo-id col-sm-2 subtitle-2">
            Pregnancy Score
          </th>
          <th class="video-name col-sm-2 align-start subtitle-2">
            Brith score
          </th>
          <th class="video-name col-sm-2 align-start subtitle-2">
            Decision
          </th>
          <th class="video-name col-sm-1 align-start subtitle-2">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="list-element row start-sm">
          <td class="col-sm-1 body-1">
            7
          </td>
          <td class="video-name-field col-sm-2 body-1">
            IMG
          </td>
          <td class="video-name-field col-sm-2 body-1">
            63%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            62%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            50%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            <select name="" id="">
              <option value="">select</option>
            </select>
          </td>
          <td class="action-field col-sm-1">
            <base-icon :icon-name="'iv-icon-delete'"></base-icon>
          </td>
        </tr>
        <tr class="list-element row start-sm">
          <td class="col-sm-1 body-1">
            10
          </td>
          <td class="video-name-field col-sm-2 body-1">
            IMG
          </td>
          <td class="video-name-field col-sm-2 body-1">
            63%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            62%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            50%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            <select name="" id="">
              <option value="">select</option>
            </select>
          </td>
          <td class="action-field col-sm-1">
            <base-icon :icon-name="'iv-icon-delete'"></base-icon>
          </td>
        </tr>
        <tr class="list-element row start-sm">
          <td class="col-sm-1 body-1">
            8
          </td>
          <td class="video-name-field col-sm-2 body-1">
            IMG
          </td>
          <td class="video-name-field col-sm-2 body-1">
            63%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            62%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            50%
          </td>
          <td class="video-name-field col-sm-2 body-1">
            <select name="" id="">
              <option value="">select</option>
            </select>
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
  name: 'TableScores'
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
