const Router = require('koa-router')
const highCondRouter = new Router({ prefix: '/highcond' })
const { gethighConds } = require('../controller/cond.controller')
const allowCross = require('../middleware/allow.cross_origin')
highCondRouter.get('/:id', allowCross, gethighConds)
module.exports = highCondRouter