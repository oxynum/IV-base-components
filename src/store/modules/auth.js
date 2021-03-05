export default {
  namespaced: true,
  state: {
    accessTokenExpDate: '',
    accessToken: '',
    refreshToken: '',
    idToken: ''
  },

  mutations: {
    SET_ATOKEN_EXP_DATE (state, expDate) {
      state.accessTokenExpDate = expDate
    },
    SET_ACCESS_TOKEN (state, accessToken) {
      state.accessToken = accessToken
    },
    SET_REFRESH_TOKEN (state, refreshToken) {
      state.refreshToken = refreshToken
    },
    SET_ID_TOKEN (state, idToken) {
      state.idToken = idToken
    }
  }
}
