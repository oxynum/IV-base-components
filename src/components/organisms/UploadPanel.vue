<template>
  <section class="iv-o-upload-panel">
    <h2 class="title-3">{{ $tc('uploadVideo') }}</h2>
    <br>
    <base-upload
      :disable-upload="isUploadDisabled"
      @fileUploaded="updateFilesList"
    />
    <list-upload
      v-if="filesListToSend.length > 0"
      :files-list="filesListToSend"
    />
  </section>
</template>

<script>
import ListUpload from '@/components/molecules/ListUpload'
import { UploadService } from '@/services/upload.service'

export default {
  name: 'UploadPanel',
  components: {
    ListUpload
  },
  props: {
    unableUpload: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      filesList: []
    }
  },
  computed: {
    isUploadDisabled () {
      return !this.unableUpload
    },
    filesListToSend () {
      return this.filesList
    }
  },
  methods: {
    updateFilesList (newFile) {
      newFile.forEach(file => {
        const fileConversion = UploadService.analyzeVideoName(file.name)
        if (fileConversion.isValid) {
          this.filesList.push({
            id: fileConversion.videoId,
            name: fileConversion.videoName,
            size: file.size / 1000000
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .iv-o-upload-panel {
    padding: 1rem !important;
    width: 100%;
    height: 100%;
  }
</style>
