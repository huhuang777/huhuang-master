<template>
  <div class="page" :class="{ mobile: mobileLayout }">
    <div class="sitemap">
      <div class="tags">
        <h3 class="title">tags</h3>
        <p v-if="!tags">暂无标签</p>
        <ul class="tag-list" v-else>
          <li class="item" :key="index" v-for="(tag, index) in tags">
            <nuxt-link :to="``" :title="tag.description">{{ tag.name }}</nuxt-link>
            <span>&nbsp;</span>
            <span>（{{ tag.count || 0 }}）</span>
          </li>
        </ul>
      </div>
      <br>
      <div class="categories">
        <h3 class="title">分类</h3>
        <p v-if="!categories">暂无分类</p>
        <ul class="categories-list" v-else>
          <li class="item" :key="index" v-for="(category, index) in categories">
            <p>
              <nuxt-link class="name"
                         to=""
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
        <p v-if="!articles">暂无文章</p>
        <ul class="article-list" v-else>
          <li class="item" :key="index" v-for="(article, index) in articles">
            <p class="item-content">
              <nuxt-link class="link"
                           :to="`/article/${article.id}`"
                           :title="article.title">「 {{ article.title }} 」</nuxt-link>
              <span class="sign">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;</span>
              <a class="toggle" href="">
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
    data () {
      return {
        mobileLayout:false,
        categories:[],
        tags:[],
        articles:[{
          title:"Git 原理入门",
          keywords:["Git","工作"],
          description:"Seven times have I despised my soul:The first time when I saw her being meek that she might attain height.The second time when I saw her limping before the crippled.The third time when she was given to choose between the hard and the easy, and she chose the easy......",
          thumb:"/images/demo.png",
          meta:{
            views:"121",
            comments:"1",
            likes:2
          },
          category:[{
            name:"code"
          },{
            name:"think"
          }],
          tag:[{
            name:"code"
          },{
            name:"think"
          }]
        }],
        categories:[{
          name:"代码人生",
          count:22,
          description:"24234vdfgsdfgsdf"
        }],
        tags:[{
          name:"javascript",
          count:22,
          description:"24234vdfgsdfgsdf"
        },{
          name:"算法与数学",
          count:22,
          description:"24234vdfgsdfgsdf"
        }],

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
