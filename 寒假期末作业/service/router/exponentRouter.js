const Router = require('koa-router')
const db = require('../db/nodejs-orm/index')
const exponentRouter = new Router({ prefix: '/exponent' })
const { getExponents } = require('../controller/exponent.controller')
const allowCross = require('../middleware/allow.cross_origin')
exponentRouter.get('/:id', allowCross, getExponents)
module.exports = exponentRouter