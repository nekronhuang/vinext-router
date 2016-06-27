const log = require('debug')('vinext:app')
const router = require('koa-router')()

const ThriftConn = require('../../utils/thriftConn')
const App = require('../../thrift_desc/gen-nodejs/AppService')
// const UserType = require('../../thrift_desc/gen-nodejs/user_types')

const client = new ThriftConn('127.0.0.1:9091', App).client

router.get('/me', (ctx, next) => {
  return client.getMe().then((doc) => {
    log(doc)
    ctx.status = doc.status
    ctx.body = doc.msg || {}
  }).then(next)
})

module.exports = router
