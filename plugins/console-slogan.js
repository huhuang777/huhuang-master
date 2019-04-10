/**
 * @file console.solgan / ES module
 * @module utils/console-slogan
 * 
 */

import { isBrowser, isProdMode } from '~/environment'

export default () => {
  if (isBrowser && isProdMode) {
    console.clear()
    console.log('%cTalk is cheap. Show me the code %chuhuang777@foxmail.com', 'color:#666;font-size:3em;', 'color:#666;font-size:13px;')
  }
}
