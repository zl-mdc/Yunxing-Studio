const Router = require('koa-router')
const { gettodayConds } = require('../controller/today.controller')
const todayRouter = new Router({ prefix: '/today' })
const allowCross = require('../middleware/allow.cross_origin')
todayRouter.get('/:id', allowCross, gettodayConds)
module.exports = todayRouter