<template>
  <div class="iv-m-list-upload">
    <table>
      <thead>
        <tr class="row start-sm">
          <th class="embryo-id col-sm-2 title-3">
            {{$tc('embryoId')}}
          </th>
          <th class="video-name col-sm-8 align-start title-3">
            {{$tc('videoName')}}
          </th>
          <th class="col-sm-2">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="list-element row start-sm" v-for="file in filesList" :key="file.name">
          <td class="col-sm-2" @click="launch">
            <div class="id-wrapper">
              <span  class="title-3" contenteditable>{{file.id}}</span>
            </div>
          </td>
          <td class="video-name-field col-sm-8 body-1">
            {{file.name}} ({{file.size}} Mo)
            <k-progress
              :percent="50"
              :color="'#564BA4'"
              :bg-color="'#EBE8FF'">
            </k-progress>
          </td>
          <td class="action-field col-sm-2">
            <base-icon class="--error" :icon-name="'iv-icon-information'"></base-icon>
            <base-icon :icon-name="'iv-icon-accept'"></base-icon>
            <base-icon :icon-name="'iv-icon-delete'"></base-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListUpload',
  props: {
    filesList: {
      type: Array,
      required: false
    }
  },
  methods: {
    launch () {
      setInterval(() => {

      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-m-list-upload {
    margin-top: 30px;

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
