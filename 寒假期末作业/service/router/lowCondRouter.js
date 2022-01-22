const Router = require('koa-router')
const lowCondRouter = new Router({ prefix: '/lowcond' })
const { getlowConds } = require('../controller/cond.controller')
const allowCross = require('../middleware/allow.cross_origin')
lowCondRouter.get('/:id', allowCross, getlowConds)
module.exports = lowCondRouter