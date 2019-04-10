<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container container">
        <div class="navbar-left">
          <div class="navbar-header">
            <span class="navbar-blank"></span>
            <img :src='cdnUrl+"/images/logo.png"' class="navbar-logo"/>
            <!-- <span class="navbar-slogan" v-text="$i18n.text.slogan"></span> -->
            <nuxt-link to="/" class="navbar-link" :title="$i18n.text.slogan"></nuxt-link>
          </div>
          <nav class="nav-list">
            <nuxt-link :to="'/'" class="item" exact>
              <span v-text="'主页'"></span>
            </nuxt-link>
            <nuxt-link :to="'/archive'" class="item">
              <span v-text="'归档'"></span>
            </nuxt-link>
            <nuxt-link :to="'/about'" class="item">
              <span v-text="'关于'"></span>
            </nuxt-link>
            <nuxt-link :to="'/guestbook'" class="item">
              <span v-text="'留言墙'"></span>
            </nuxt-link>
          </nav>
        </div>
        <div class="navbar-right">
          <div class="search-box">
            <input id="keyword" 
              required 
              list="keywords"
              type="search" 
              name="search" 
              class="search-input"
              :placeholder="'搜索文章'"
              v-model.trim="keyword"
              @keyup.enter="toSearch">
            <button class="search-btn" @click="toSearch">
              <i class="iconfont icon-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { Route } from '~/constants/system'
import { isArticleDetailRoute, isSearchArchiveRoute } from '~/utils/route'
export default {
  name: 'layout-header',
  data() {
    return {
      preload: false,
      keyword: ''
    }
  },
  mounted() {
    if (isSearchArchiveRoute(this.$route.name)) {
      this.keyword = this.$route.params.keyword
    }
  },
  methods: {
    toSearch() {
      const keyword = this.keyword
      const paramsKeyword = this.$route.params.keyword
      const isSearchPage = isSearchArchiveRoute(this.$route.name)
      if (keyword && (isSearchPage ? (paramsKeyword !== keyword) : true)) {
        this.$router.push({ name: Route.SearchArchive, params: { keyword }})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';
@import '~assets/sass/variables';
.header {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    background-color: $module-bg;
    z-index: 999;
    .navbar-right {
      display: flex;
      align-items: center;
      > .search-box {
        padding: 0.5em;
        overflow: hidden;
        width: 18em;
        > .search-input,
        > .search-btn,
        > .sitemap-btn {
          background-color: $module-hover-bg;
          height: 2.6em;
          line-height: 2.6em;
          float: left;
          &:hover {
            background-color: $module-hover-bg-darken-20;
          }
        }
        > .search-input {
          margin-right: 0;
          width: 14.2em;
          padding: 0.5em 1em;
          box-sizing: border-box;
        }
        > .search-btn {
          width: 2.6em;
          background-color: $module-hover-bg-darken-20;
          &:hover {
            background-color: $module-hover-bg-darken-40;
          }
        }
      }
    }
    .navbar-left {
      height: $header-height;
      display: flex;
      .nav-list {
        display: flex;
        align-items: center;
        > .item {
          display: block;
          text-transform: uppercase;
          font-weight: 700;
          color: $secondary;
          margin-right: 2em;
          &:hover {
            color: $primary;
          }
          &.link-active {
            font-weight: bold;
            color: $primary;
            // background-color: $module-bg;
          }
        }
      }
    }
    .navbar-container {
      height: $header-height;
      display: flex;
      justify-content: space-between;

      .navbar-header {
        height: $header-height;
        display: flex;
        position: relative;
        align-items: center;
        padding-left: 0.5em;
        width: 13em;
        position: relative;
        overflow: hidden;

        @keyframes logo-blink {
          0% {
            opacity: 0;
            transform: translateX(-10%);
          }
          5% {
            opacity: 1;
          }
          35% {
            opacity: 1;
          }
          39% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          60% {
            opacity: 0.8;
          }
          65% {
            opacity: 0.8;
            transform: translateX(100%);
          }
          70% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        > .navbar-blank {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          opacity: 0;
          animation: logo-blink 8s ease-in 1s infinite;

          &:before {
            content: '';
            width: 11rem;
            height: 3rem;
            position: absolute;
            top: 15%;
            left: 0;
            transform: rotate(-45deg);
            background: radial-gradient(
              white,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0)
            );
          }
        }

        .navbar-logo {
          width: 11rem;
          margin-right: 4rem;

          .logo-st {
            fill: $primary;
          }
        }
        .navbar-slogan {
          color: $primary;
        }
        .navbar-link {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
