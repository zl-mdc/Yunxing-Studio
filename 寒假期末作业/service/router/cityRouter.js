const Router = require('koa-router')
const cityRouter = new Router({ prefix: '/city' })
const { getCityById, getCityByName } = require('../controller/city.controller')
const allowCross = require('../middleware/allow.cross_origin')
cityRouter.get('/', allowCross, getCityByName)
cityRouter.get('/:id', allowCross, getCityById)

module.exports = cityRouter