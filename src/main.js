import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseComponents from '@/plugins/baseComponents'
import i18n from './i18n'
import Default from '@/views/layouts/Default'
import Center from '@/views/layouts/Center'
import FullLayout from '@/views/layouts/FullLayout'
import VueCookie from 'vue-cookie'

import Kprogress from 'k-progress'
import VueProgressBar from 'vue-progressbar'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

// Register layouts
Vue.component('default-layout', Default)
Vue.component('center-layout', Center)
Vue.component('full-layout', FullLayout)
Vue.component('k-progress', Kprogress)
Vue.component('apexchart', VueApexCharts)

Vue.use(VueApexCharts)
Vue.use(BaseComponents)
Vue.use(VueProgressBar, {
  color: '#FD0054',
  failedColor: 'red',
  height: '4px'
})
Vue.use(VueCookie)

export default new Vue({
  router,
  store,
  i18n,
  mounted () {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => store.commit('app/SET_WINDOW_WIDTH', window.innerWidth))
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => store.commit('app/SET_WINDOW_WIDTH', window.innerWidth))
  },
  render: h => h(App)
}).$mount('#app')
