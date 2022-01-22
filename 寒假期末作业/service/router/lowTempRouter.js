const Router = require('koa-router')
const db = require('../db/nodejs-orm/index')
const lowTempRouter = new Router({ prefix: '/lowtemp' })
const { getLowTemp } = require('../controller/temp.controller')
const allowCross = require('../middleware/allow.cross_origin')
lowTempRouter.get('/:id', allowCross, getLowTemp)
module.exports = lowTempRouter