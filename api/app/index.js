const router = require('koa-router')()

router.get('/me', (ctx, next) => {
  return next().then(() => {
    ctx.body = 'hello'
  })
})

module.exports = router
