const pkg = require('./package')
const apiConfig = require('./api.config')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
const langIsEn = false;
const slogan = langIsEn
  ? 'Talk is cheap. Show me the code.'
  : '有匪君子，如切如磋，如琢如磨'

module.exports = {
  mode: 'universal',
  loading: {
    color: '#0088f5'
  },
  cache: {
    max: 100,
    maxAge: 1000 * 60 * 15
  },
  /*
  ** Headers of the page
  */
  dev: isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl,
    HOST_URL: apiConfig.socketHost
  },
  head: {
    title: `Huhuang.me - ${slogan}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [
        { innerHTML: 'This website requires JavaScript.' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    { src: '~assets/sass/app.scss', lang: 'sass' }
  ],
  router: {
    middleware: ['change-page-col'],
    linkActiveClass: 'link-active',
    scrollBehavior(to, from, savedPosition) {
       // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
    if (to.hash) {
      return { selector: to.hash }
    }
      return { x: 0, y: 0 }
    },
    extendRoutes(routes) {}
  },
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  { src: '~/plugins/vue-extend.js' },
  { src: '~/plugins/swiper.js', ssr: false },
  { src: '~/plugins/copy-right.js', ssr: false },
  { src: '~/plugins/marked.js' },
  { src: '~/plugins/highlight.js' },
  { src: '~/plugins/image-popup.js', ssr: false },
  { src: '~/plugins/analytics.js', ssr: false },
  // { src: '~/plugins/particles.js', ssr: false }
],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    extend(webpackConfig, { isDev, isClient }) {
      // 处理 Swiper4 下的 dom7 模块的语法问题
      webpackConfig.resolve.alias.dom7$ = 'dom7/dist/dom7.js'
      webpackConfig.resolve.alias.swiper$ = 'swiper/dist/js/swiper.js'
      if (isDev && isClient) {
        // Run ESLINT on save
        webpackConfig.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: [/(node_modules)/, /underscore-simple/, /webrtc/]
        })
      }
    },
    vendor: [
      'axios',
      'swiper',
      'bezier-easing',
      'marked',
      'gravatar',
      'highlight.js',
    ],
    maxChunkSize: 350000,
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxtjs/babel-preset-app",
            { targets: isServer ? { node: "10.4.0" } : { chrome: 69 } }
          ]
        ]
      },
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator'
      ],
      comments: true
    },
    styleResources: {
      scss: './assets/sass/init.scss',
      options: {}
    }
  }
}
