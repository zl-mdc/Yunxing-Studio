const Router = require('koa-router')
const highTempRouter = new Router({ prefix: '/hightemp' })
const allowCross = require('../middleware/allow.cross_origin')
const { getHighTemp } = require('../controller/temp.controller')
highTempRouter.get('/:id', allowCross, getHighTemp)
module.exports = highTempRouter