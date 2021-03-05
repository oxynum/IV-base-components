<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <modal-template
      v-if="modal.isOpen"
      :title="modal.props.title"
      :cta-list="modal.props.ctaList"
      :content-body="modal.props.contentBody"
    />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import ModalTemplate from '@/components/molecules/modals/ModalTemplate'
import { mapState } from 'vuex'

const default_layout = 'default'

export default {
  components: {
    ModalTemplate
  },
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  computed: {
    ...mapState('app', ['modal']),
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import 'styles/global';

#app {
  width: 100%;
  height: 100%;
}
</style>
