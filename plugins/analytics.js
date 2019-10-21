/**
 * @file GA 统计服务 / ES module
 * @module plugins/analytics
 */

// import Vue from 'vue'
// import VueAnalytics from 'vue-analytics'
import { isBrowser, isProdMode } from '../environment/esm'

// if (isBrowser) {
//   // 新版本解决方案
//   window.onNuxtReady(app => {
//     Vue.use(VueAnalytics, {
//       id: 'UA-128592903-1',
//       router: window.$nuxt.$router,
//       customResourceURL: '/scripts/analytics.js',
//       autoTracking: {
//         exception: true,
//         screenview: true
//       },
//       checkDuplicatedScript: true,
//       debug: {
//         sendHitTask: isProdMode
//       },
//       onReady() {
//         Vue.$ga.require('displayfeatures')
//       }
//     })
//   })
// }

if (isBrowser) {
  /*
  ** Google 统计分析脚本
  */
  ;(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function() {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '/scripts/analytics.js', 'ga')
  /*
  ** 当前页的访问统计
  */
  ga('create', 'UA-128592903-1', 'auto')
  // ga('send', 'pageview')
}

export default ({ app: { router }, store }) => {
  /*
  ** 每次路由变更时进行pv统计
  */
  router.afterEach((to, from) => {
    /*
    ** 告诉 GA 增加一个 PV
    */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
