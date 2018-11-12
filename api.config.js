
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  // cdnUrl: isProdMode ? 'https://' : '',
  cdnUrl: isProdMode ? 'https://cdn.huhuang.me' : '',
  baseUrl: isProdMode ? 'https://api.huhuang.me' : 'http://localhost:8000/',
  socketHost: isProdMode ? 'https://huhuang.me' : 'http://localhost:3000'
}
