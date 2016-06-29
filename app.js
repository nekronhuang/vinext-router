const Koa = require('koa')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')

global.Promise = require('bluebird')

const log = require('debug')('vinext:app')
const routers = require('./config/routers')

const app = new Koa()

onerror(app)

app.use(convert(json()))
app.use(convert(logger()))
app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.get('Origin'))
  ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  ctx.set('Access-Control-Allow-Headers', ctx.get('access-control-request-headers'))
  if (ctx.method === 'OPTIONS') {
    ctx.status = 204
  }
  return next()
})
app.use((ctx, next) => {
  log(ctx.request.header['cache-control'])
  return next()
})

app.use(routers.routes(), routers.allowedMethods())

module.exports = app
