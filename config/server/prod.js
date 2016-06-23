const config = require('./base')
const pack = require('../../package')

config.port = 8080
config.env = 'production'
config.version = pack.version

module.exports = config
