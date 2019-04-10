/**
 * @file Comment box component / ES module
 * @module components/common/comment
 * 
 */

import vueComment from './comment'

const comment = {
  install(Vue) {
    Vue.component('comment-box', vueComment)
  }
}

export default comment
