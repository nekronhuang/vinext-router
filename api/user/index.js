const log = require('debug')('vinext:user')
const router = require('koa-router')()

const ThriftConn = require('../../utils/thriftConn')
const User = require('../../thrift_desc/gen-nodejs/UserService')
// const UserType = require('../../thrift_desc/gen-nodejs/user_types')

const Conn = new ThriftConn('127.0.0.1:9090', User)

router.get('/', (ctx, next) => {
  const client = Conn.client

  return client.getUser().then((doc) => {
    log(doc)
    ctx.status = doc.status
    ctx.body = doc.msg || {}
  }).then(next)
})

module.exports = router
