const Koa = require('koa')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')

// const log = require('debug')('vinext:app')
global.Promise = require('bluebird')
const routers = require('./config/routers')

const app = new Koa()

onerror(app)

app.use(convert(json()))
app.use(convert(logger()))

app.use(routers.routes(), routers.allowedMethods())

module.exports = app
