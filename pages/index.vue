<template>
  <div class="index-home">
    <carrousel :article="article"></carrousel>
    <!-- <latest-article :article="article"></latest-article> -->
    <article-list :article="article" @loadmore="loadmoreArticle"></article-list>
  </div>
</template>

<script>
import {
  Tag,
  LatestArticle,
  articleList,
  Carrousel
} from '../components/archive'
export default {
  name:"index",
  fetch({ store }) {
    return Promise.all([
      store.dispatch('loadArticles'),
    ])
  },
  computed: {
    article() {
      return this.$store.state.article.list
    },
    nextPageParams() {
      return {
        page: this.article.data.pagination.current_page + 1
      }
    }
  },
  methods: {
    loadmoreArticle() {
      this.$store.dispatch('loadArticles', this.nextPageParams)
    }
  },
  components: {
    articleList,
    Carrousel
  }
}
</script>

<style scoped>
</style>
