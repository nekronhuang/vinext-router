require('babel-core/register')({
  ignore: /thrift_desc/, // A conflict between babel and thrift compile file
  presets: ['stage-3', 'es2015'],
})

require('babel-polyfill')

const http = require('http')
const log = require('debug')('vinext:start')

const config = require('./config/server/dev')
const app = require('./app')
const server = http.createServer(app.callback())

server.listen(config.port)
server.on('error', (err) => {
  log('catch error: %o', err)
  process.exit(1)
})
server.on('listening', () => {
  log(`${config.name}@${config.version} listening on port ${config.port}`)
})
