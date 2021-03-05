<template>
  <div class="iv-a-upload">
    <div class="iv-a-upload-wrapper">
      <h1 class="title-3">
        {{$tc('dragAndDrop')}} {{$tc('or')}} <span class="underlined-text">{{$tc('browse')}}</span>
      </h1>
    </div>
    <input type="file" class="iv-input-upload" @change="previewFiles" :disabled="disableUpload" accept="video/mp4,video/avi" multiple>
  </div>
</template>

<script>
export default {
  name: 'BaseUpload',
  props: {
    disableUpload: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    previewFiles (event) {
      this.$emit('fileUploaded', event.target.files)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-a-upload {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #bdb5fd;
    border-radius: 10px;

    &-wrapper {
      transform: translateY(70px) ;
    }

    .title-3 {
      color: $color-iv-gray-minus;
      font-weight: 100;
    }

    .iv-input-upload {
      opacity: 0; /* invisible but it's there! */
      width: 100%;
      height: 200px;
      cursor: pointer;
    }

    &:hover {
      .underlined-text {
        color: $color-iv-primary;
        text-decoration: underline;
      }
    }

  }
</style>
