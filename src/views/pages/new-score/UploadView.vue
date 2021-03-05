<template>
  <div class="iv-p-new-score__panel --right col-sm-8">
    <upload-panel
      :enable-upload="unableUpload"
    />
    <footer class="iv-p-new-score__panel-footer row between-sm center-sm">
      <base-button v-if="true" class="col-sm-3" :text="'Upload Videos'" />
      <base-button v-if="true" class="col-sm-3" :text="'Rank embryos'" @baseButtonClicked="goToRankEmbryos()"/>
    </footer>
  </div>
</template>

<script>
import UploadPanel from '@/components/organisms/UploadPanel'

export default {
  name: 'UploadView',
  components: {
    UploadPanel
  },
  methods: {
    goToRankEmbryos () {
      this.$router.push('/my-database')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/global";

.iv-p-new-score__panel {
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
</style>
