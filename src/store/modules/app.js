/**
 * App module
 */
export default {
  namespaced: true,
  state: {
    sidebar: {
      isFullSize: true,
      activeLink: 'newscore'
    },
    modal: {
      isOpen: false,
      props: {}
    }
  },
  actions: {
    toggleSidebar ({ commit }) {
      commit('CHANGE_SIDEBAR_SIZE')
    },
    updateActiveElement ({ commit }, activeElement) {
      commit('SET_ACTIVE_ELEMENT', activeElement)
    },
    openModal ({ commit }, modalProps) {
      commit('OPEN_MODAL', modalProps)
    },
    closeModal ({ commit }) {
      commit('CLOSE_MODAL')
    }
  },
  mutations: {
    CHANGE_SIDEBAR_SIZE (state) {
      state.sidebar.isFullSize = !state.sidebar.isFullSize
    },
    SET_ACTIVE_ELEMENT (state, value) {
      state.sidebar.activeLink = value
    },
    OPEN_MODAL (state, modalProps) {
      state.modal.isOpen = true
      state.modal.props = modalProps
    },
    CLOSE_MODAL (state) {
      state.modal.isOpen = false
    }
  }
}
