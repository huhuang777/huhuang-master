<template>
  <div class="page" :class="{ mobile: mobileLayout }">
    <div class="sitemap">
      <div class="tags">
        <h3 class="title">tags</h3>
        <p v-if="!tags.data.length">暂无标签</p>
        <ul class="tag-list" v-else>
          <li class="item" :key="index" v-for="(tag, index) in tags.data">
            <nuxt-link :to="`/tag/${tag.slug}`" :title="tag.description">{{ tag.name }}</nuxt-link>
            <span>&nbsp;</span>
            <span>（{{ tag.count || 0 }}）</span>
          </li>
        </ul>
      </div>
      <br>
      <div class="categories">
        <h3 class="title">分类</h3>
        <p v-if="!categories.data.length">暂无分类</p>
        <ul class="categories-list" v-else>
          <li class="item" :key="index" v-for="(category, index) in categories.data">
            <p>
              <nuxt-link class="name"
                :to="`/category/${category.slug}`"
                :title="category.name"
                >{{ category.name }}</nuxt-link>
              <span>&nbsp;</span>
              <span>（{{ category.count || 0 }}）</span>
              <span>&nbsp;-&nbsp;&nbsp;</span>
              <span>{{ category.description }}</span>
            </p>
          </li>
        </ul>
      </div>
      <br>
      <div class="articles">
        <h3 class="title" v-text="'文章'">articles</h3>
        <p v-if="!articles.data.length">暂无文章</p>
        <ul class="article-list" v-else>
          <li class="item" :key="index" v-for="(article, index) in articles.data">
            <p class="item-content">
              <nuxt-link class="link"
                :to="`/article/${article.id}`"
                :title="article.title">「 {{ article.title }} 」</nuxt-link>
              <span class="sign">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;</span>
              <a class="toggle" @click.prevent="$store.commit('sitemap/TOGGLE_ARTICLE_OPEN', index)">
                <small v-text="article.open ? '关闭描述' : '打开描述'"></small>
              </a>
            </p>
            <transition name="module">
              <p v-show="article.open" class="item-description">
                <span v-html="article.description"></span>
              </p>
            </transition>
          </li>
        </ul>
      </div> 
      <br>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'sitemap',
    head() {
      return {
        title: `${this.langIsEn ? '' :'归档'+ ' | '}Sitemap`
      }
    },
    fetch({ store }) {
      return store.dispatch('loadSitemapArticles', { per_page: 666 })
    },
    computed: {
      ...mapState({
        tags: state => state.tag.data,
        categories: state => state.category.data,
        articles: state => state.sitemap.articles.data,
        isMobile: state => state.global.isMobile,
      })
    },
    data () {
      return {
        mobileLayout:false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page {
    padding: 2em 3em;
    background-color: $module-bg;
    overflow: hidden;
    
    &.mobile {
      padding: 1.666rem;

      ul {
        padding-left: 1.666rem;

        &.article-list {

          > .item {

            > .item-content {

              > .link {
                display: block;
                margin-bottom: 1rem;
              }

              > .sign {
                display: none;
              }
            }
          }
        }
      }
    }

    .sitemap {
      text-transform: capitalize;

      a {
        text-decoration: underline;

        &.toggle {
          text-decoration: blink;
        }
      }

      .tags,
      .pages,
      .articles,
      .categories {

        .title {
          margin: 0em 0 1em;
          font-weight: bold;
          text-transform: capitalize;
        }
      }

      .articles {

        .article-list {

          > .item {

            > .item-description {
              line-height: 2.16rem;
            }
          }
        }
      }

      .tags,
      .pages {

        .tag-list,
        .page-list {
          overflow: hidden;

          .item {
            float: left;
            display: block;
            margin-right: 1.5em;
            margin-bottom: 1em;
            font-size: 1.1em;
          }
        }
      }

      .categories {

        .categories-list {

          .item {

            .name {
              text-transform: capitalize;
              font-size: 1.1em;
            }
          }
        }
      }
    }
  }
</style>
