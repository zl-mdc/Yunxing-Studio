const Router = require('koa-router')
const db = require('../db/nodejs-orm/index')
const currentRouter = new Router({ prefix: '/current' })
const { getList } = require('../controller/current.controller')
const allowCross = require('../middleware/allow.cross_origin')
currentRouter.get('/:id', allowCross, getList)
module.exports = currentRouter