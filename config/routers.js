const router = require('koa-router')()

const appRouter = require('../api/app')
const userRouter = require('../api/user')

router.use('/api/apps', appRouter.routes(), appRouter.allowedMethods())
router.use('/api/users', userRouter.routes(), userRouter.allowedMethods())

module.exports = router
