import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00bfcf23 = () => interopDefault(import('../pages/ChartsPage/Apexcharts/index.vue' /* webpackChunkName: "pages/ChartsPage/Apexcharts/index" */))
const _31f1c293 = () => interopDefault(import('../pages/ChartsPage/ChartInfo.vue' /* webpackChunkName: "pages/ChartsPage/ChartInfo" */))
const _c377c65e = () => interopDefault(import('../pages/ChartsPage/Chartjs/index.vue' /* webpackChunkName: "pages/ChartsPage/Chartjs/index" */))
const _86231f38 = () => interopDefault(import('../pages/ChartsPage/Echarts/index.vue' /* webpackChunkName: "pages/ChartsPage/Echarts/index" */))
const _3509e3a3 = () => interopDefault(import('../pages/ChartsPage/Highcharts/index.vue' /* webpackChunkName: "pages/ChartsPage/Highcharts/index" */))
const _17633710 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ChartsPage/Apexcharts",
    component: _00bfcf23,
    name: "ChartsPage-Apexcharts"
  }, {
    path: "/ChartsPage/ChartInfo",
    component: _31f1c293,
    name: "ChartsPage-ChartInfo"
  }, {
    path: "/ChartsPage/Chartjs",
    component: _c377c65e,
    name: "ChartsPage-Chartjs"
  }, {
    path: "/ChartsPage/Echarts",
    component: _86231f38,
    name: "ChartsPage-Echarts"
  }, {
    path: "/ChartsPage/Highcharts",
    component: _3509e3a3,
    name: "ChartsPage-Highcharts"
  }, {
    path: "/",
    component: _17633710,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
