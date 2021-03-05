import Vue from 'vue'
import VueRouter from 'vue-router'
import { Routes as routes } from './routesList'
import Middlewares from './middlewares'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(Middlewares.initCurrentUserState)
router.beforeEach(Middlewares.checkAccess)
router.beforeEach(Middlewares.setPageTitle)

Vue.use(VueRouter)

export default router
