<template>
  <div id="app" :class="theme" v-cloak>
    <clipboard />
    <div id="app-main" v-if="!isMobile">
      <background></background>
      <header-view></header-view>
      <main id="main">
        <div
          id="main-content"
          class="main-content"
          :class="{
               'full-column': fullColumn,
               'error-column': errorColumn,
               'mobile-layout': isMobile,
               [$route.name]: true
              }"
        >
          <nuxt></nuxt>
        </div>
        <transition name="aside">
          <aside-view v-if="!fullColumn && !errorColumn" keep-alive></aside-view>
        </transition>
      </main>
      <template>
        <tool-box />
      </template>
      <!-- footer -->
      <footer-view v-if="!isMobile" />
    </div>
    <mobile-main-view v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Header, Background, Aside, ToolBox, Footer } from '~/components/layout'
import Clipboard from '~/components/widget/clipboard'
import MobileMainView from '~/components/layout/mobile/main'
export default {
  name: 'app',
  head() {
    return this.isMobile ? { bodyAttrs: { class: 'mobile' } } : {}
  },
  data() {
    return {
      theme: 'default',
      clipboardText: ''
    }
  },
  components: {
    Clipboard,
    MobileMainView,
    HeaderView: Header,
    AsideView: Aside,
    footerView: Footer,
    background: Background,
    ToolBox
  },
  mounted() {},
  computed: {
    ...mapState('option', ['fullColumn', 'errorColumn']),
    isMobile() {
      return this.$store.state.option.mobileLayout
    }
  },
  methods: {
    setTheme(theme) {
      this.theme = theme
    },
    watchTabActive() {
      let reallyDocumentTitle
      document.addEventListener(
        'visibilitychange',
        event => {
          if (event.target.hidden || event.target.webkitHidden) {
            reallyDocumentTitle = document.title
            document.title = '皮皮虾，快回来！'
          } else {
            document.title = reallyDocumentTitle
          }
        },
        false
      )
    },
    watchFullScreen() {
      const fullscreenchange = event => {
        // console.log('fullscreenchange', event)
      }
      document.addEventListener('fullscreenchange', fullscreenchange, false)
      document.addEventListener('mozfullscreenchange', fullscreenchange, false)
      document.addEventListener(
        'webkitfullscreenchange',
        fullscreenchange,
        false
      )
      document.addEventListener('msfullscreenchange', fullscreenchange, false)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  color: $text;

  &[v-cloak] {
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  #app-main {
    transition: $mobile-aisde-transition;

    &.open {
      transition: $mobile-aisde-transition;
      transform: translateX(68%);
    }

    main {
      position: relative;
      display: flex;
      justify-content: space-between;
      &.service {
        width: 100%;
      }
      .main-content {
        width: 54.5em;
        position: relative;
        overflow: hidden;
        @include css3-prefix(transition, width 0.35s);

        &:-moz-full-screen {
          overflow-y: auto;
        }

        &:-webkit-full-screen {
          overflow-y: auto;
        }

        &:fullscreen {
          overflow-y: auto;
        }

        &.full-column {
          width: 100%;
          @include css3-prefix(transition, width 0.35s);
        }

        &.error-column {
          width: 100%;
          margin: 0;
          @include css3-prefix(transition, width 0.35s);
        }

        &.mobile-layout {
          width: 100%;
          margin: 0;
          padding: 1rem;
          padding-top: $navbar-height + 1;
        }

        &.service {
          width: 100%;
          margin: -1em 0;

          &.mobile-layout {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
