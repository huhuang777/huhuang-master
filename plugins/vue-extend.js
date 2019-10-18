/**
 * @file Vue extends / ES module
 */

import Vue from 'vue'
import apiConfig from '@/config/api.config'
import i18nConfig from '@/config/i18n.config'
import filters from '@/filters'
import i18nTransfer from '@/utils/i18n-transfer'
import EmptyBox from '@/components/common/empty'
import LoadingBox from '@/components/common/loading'
import CommentBox from '@/components/common/comment'
import SkeletonBox from '@/components/common/skeleton'

const i18nData = i18nTransfer(i18nConfig)

// cdn
Vue.prototype.cdnUrl = apiConfig.cdnUrl
Vue.prototype.proxyUrl = apiConfig.proxyUrl

// filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(EmptyBox)
Vue.use(LoadingBox)
Vue.use(CommentBox)
Vue.use(SkeletonBox)
// mixins
Vue.mixin({
  computed: {
    $i18n() {
      return i18nData[this.$store.state.option.language]
    }
  }
})
