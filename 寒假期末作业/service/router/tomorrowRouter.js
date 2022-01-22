const Router = require('koa-router')
const { gettomorrowConds } = require('../controller/today.controller')
const tomorrowRouter = new Router({ prefix: '/tomorrow' })
const allowCross = require('../middleware/allow.cross_origin')
tomorrowRouter.get('/:id', allowCross, gettomorrowConds)
module.exports = tomorrowRouter