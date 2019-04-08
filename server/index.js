const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const http = require('http')

process.noDeprecation = true

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const server = new http.Server(app)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const updateGAScript = require('../utils/update-analytics')
// 替换 console 为更统一友好的
const { log, warn, info } = console
const color = c => config.dev ? c : ''
global.console = Object.assign(console, {
  log: (...args) => log('[log]', ...args),
  warn: (...args) => warn(color('\x1b[33m%s\x1b[0m'), '[warn]', '[huhuang.net]', ...args),
  info: (...args) => info(color('\x1b[34m%s\x1b[0m'), '[info]', '[huhuang.net]', ...args),
  error: (...args) => info(color('\x1b[31m%s\x1b[0m'), '[error]', '[huhuang.net]', ...args),
})

const nuxt = new Nuxt(config)
app.use(nuxt.render)
app.set('port', port)

if (config.dev) {
  const handleProxy = path => (req, res) => {
    const targetUrl = 'http://' + req.url.replace('/proxy/' + (path ? path + '/' : ''), '')
    require('request').get(targetUrl).pipe(res)
  }
  app.get('/proxy/music/*', handleProxy('music'))
  app.get('/proxy/bilibili/*', handleProxy('bilibili'))
  app.get('/proxy/*', handleProxy())
}


const bootstrap = () => {
  server.listen(port, host)
  const appName = config.manifest.name
  const envText = config.dev ? '开发模式' : '生产模式'
  console.info(`${appName} ${envText}启动成功！listening on ${host}:${port}, at ${new Date().toLocaleString()}`)
  // 启动扩展服务
  updateGAScript()
}

config.dev
  ? new Builder(nuxt).build().then(bootstrap).catch((error) => {
      console.error('开发模式启动失败：', error)
      process.exit(1)
    })
  : bootstrap()


