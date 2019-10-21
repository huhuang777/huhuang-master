/**
 * @file Api config / Commonjs module
 * @module api.config
 */

const apiJson = require('./api.json')
const { NODE_ENV } = require('../environment')
module.exports = apiJson[NODE_ENV]
