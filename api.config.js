
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  // cdnUrl: isProdMode ? 'https://' : '',
  cdnUrl: isProdMode ? 'https://cdn.huhuang.net' : '',
  baseUrl: isProdMode ? 'https://api.huhuang.net' : 'https://api.huhuang.net',
  socketHost: isProdMode ? 'https://huhuang.net' : 'http://localhost:3000',
  proxyUrl: isProdMode ? 'https://huhuang.net/proxy' : "/proxy/"
}
