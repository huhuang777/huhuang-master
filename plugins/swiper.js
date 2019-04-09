/**
 * @file vue-awesome-swiper / ES module
 */

import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

// Vue.use(VueAwesomeSwiper)
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
