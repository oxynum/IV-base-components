import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isSideBarOpen: state => state.app.sidebar
    }),
    getSidebarClass () {
      return this.isSideBarOpen.isFullSize ? 'col-sm-2' : 'col-sm-1 --small'
    },
    getHeaderClass () {
      return this.isSideBarOpen.isFullSize ? 'col-sm-10' : 'col-sm-11'
    }
  }
}
