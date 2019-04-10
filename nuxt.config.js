const pkg = require('./package')
const path = require('path')
const apiConfig = require('./api.config')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
const langIsEn = false;
const slogan = langIsEn
  ? 'Talk is cheap. Show me the code.'
  : '有匪君子，如切如磋，如琢如磨'

module.exports = {
  mode: 'universal',
  modern: true, 
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
  dev: !isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl,
    HOST_URL: apiConfig.socketHost
  },
  head: {
    title: `Huhuang.net - ${slogan}`,
    titleTemplate: `%s | Huhuang.net `,
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: "huhuang,胡煌,Vue开发者,前端技术开发,javascript技术" },
    ],
    link: [
      { rel: 'dns-prefetch', href: `//huhuang.net` },
      { rel: 'dns-prefetch', href: '//api.huhuang.net' },
      { rel: 'dns-prefetch', href: '//cdn.huhuang.net' },
      { rel: 'dns-prefetch', href: '//static.huhuang.net' },
      { rel: 'dns-prefetch', href: '//gravatar.huhuang.net' },
      { rel: 'dns-prefetch', href: '//at.alicdn.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//adservice.google.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//googleads.g.doubleclick.net' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//tpc.googlesyndication.com' },
      { rel: 'dns-prefetch', href: '//pagead2.googlesyndication.com' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'author', type: 'text/plain', href: '/humans.txt' }
    ],
    noscript: [
        { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  manifest: {
    name: "Huhuang.net",
    short_name: "huhuang",
    theme_color: "#0088f5",
    background_color: '#eee',
    description: slogan,
    display: 'standalone',
  },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    'highlight.js/styles/ocean.css',
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
  { src: '~/plugins/swiper.js', mode: 'client'},
  { src: '~/plugins/copy-right.js', mode: 'client'},
  { src: '~/plugins/marked.js' },
  { src: '~/plugins/gravatar' },
  { src: '~/plugins/highlight.js' },
  { src: '~/plugins/image-popup.js', mode: 'client'},
  { src: '~/plugins/analytics.js', mode: 'client' },
  // { src: '~/plugins/particles.js', ssr: false }
],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['@nuxtjs/axios', { baseURL: apiConfig.baseUrl }]
  ],
  /*
  ** Axios module configuration
  */

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: process.argv.join('').includes('analyze'), // 分析
    maxChunkSize: 360000, // 单个包最大尺寸
    extractCSS: true, // 单独提取 css
    publicPath: apiConfig.cdnUrl + '/_nuxt/',
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          expansions: {
            name: 'expansions',
            test(module) {
              return /swiper|233333|howler|lozad|marked|favico|rtcpeerconnection|webrtc|highlight/.test(module.context);
            },
            chunks: 'initial',
            priority: 10,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
          // page -> 合并组件会导致运行异常
          /*
          page: {
            name: 'page',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
            priority: -20
          }
          */
        }
      }
    },
    extend(webpackConfig, { isDev, isClient }) {
      // 处理 Swiper4 下的 dom7 模块的语法问题
      webpackConfig.resolve.alias.dom7$ = 'dom7/dist/dom7.js'
      webpackConfig.resolve.alias.swiper$ = 'swiper/dist/js/swiper.js'
      // if (isDev && isClient) {
      //   // Run ESLINT on save
      //   webpackConfig.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: [/(node_modules)/, /underscore-simple/, /webrtc/]
      //   })
      // }
      if (isProdMode) {
        // 处理 Template 和 CSS 中的 cdn 地址
        const vueLoader = webpackConfig.module.rules.find(loader => loader.loader === 'vue-loader')
        if (vueLoader) {
          // vueLoader.options.loaders.html = path.resolve(__dirname, './extend/html-cdn-loader')
          const vueLoaders = vueLoader.options.loaders
          for (const cssLoader in vueLoaders) {
            if (Array.isArray(vueLoaders[cssLoader])) {
              const targetLoader = vueLoaders[cssLoader].find(loader => loader.loader === 'css-loader')
              targetLoader && (targetLoader.options.root = apiConfig.cdnUrl)
            }
          }
        }
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
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxtjs/babel-preset-app",
            { targets: isServer ? { node: "10.4.0" } : { chrome: 69 } }
          ]
        ]
      },
      sourceType: 'unambiguous',
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator'
      ],
      comments: true
    },
    styleResources: {
      scss: './assets/sass/init.scss',
    }
  }
}
