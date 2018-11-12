<template>
  <div id="app" :class="theme" v-cloak>
    <div id="app-main">
      <background></background>
      <header-view></header-view>
      <main id="main">
        <div id="main-content" 
             class="main-content" 
             :class="{
               'full-column': fullColumn,
               'error-column': errorColumn,
               'mobile-layout': mobileLayout,
               [$route.name]: true
              }">
          <nuxt></nuxt>
        </div>
        <transition name="aside">
          <aside-view v-if="!fullColumn && !errorColumn && !mobileLayout"  keep-alive></aside-view>
        </transition>
      </main>
      <template v-if="!mobileLayout">
        <tool-box/>
      </template>
      <!-- footer -->
      <footer-view v-if="!mobileLayout" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'  
  import { Header,Background,Aside,ToolBox,Footer} from '~/components/layout'
  export default {
    name: 'app',
    data() {
      return {
        theme: 'default',
        clipboardText: '',
        mobileLayout:false
      }
    },
    components: {
      HeaderView: Header,
      AsideView:Aside,
      footerView:Footer,
      background:Background,
      ToolBox,
    },
    mounted() {
      
    },
    computed: {
      ...mapState('option', [
        'fullColumn',
        'errorColumn'
      ]),
    },
    methods: {
      setTheme(theme) {
        this.theme = theme
      },
      watchTabActive() {
        let reallyDocumentTitle
        document.addEventListener('visibilitychange', event => {
          if (event.target.hidden || event.target.webkitHidden) {
            reallyDocumentTitle = document.title
            document.title = '皮皮虾，快回来！'
          } else {
            document.title = reallyDocumentTitle
          }
        }, false)
      },
      watchFullScreen() {
        const fullscreenchange = event => {
          // console.log('fullscreenchange', event)
        }
        document.addEventListener("fullscreenchange", fullscreenchange, false)
        document.addEventListener("mozfullscreenchange", fullscreenchange, false)
        document.addEventListener("webkitfullscreenchange", fullscreenchange, false)
        document.addEventListener("msfullscreenchange", fullscreenchange, false)
      }
    },
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
          width:54.5em;
          position: relative;
          overflow: hidden;
          @include css3-prefix(transition, width .35s);

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
            @include css3-prefix(transition, width .35s);
          }

          &.error-column {
            width: 100%;
            margin: 0;
            @include css3-prefix(transition, width .35s);
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
