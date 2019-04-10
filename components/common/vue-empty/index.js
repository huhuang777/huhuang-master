/**
 * @file Vue-empty component / ES module
 */

import EmptyComponent from './empty'

const empty = {
  install(Vue) {
    Vue.component('empty-box', EmptyComponent)
  }
}

export default empty
