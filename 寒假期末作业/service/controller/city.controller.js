const handleDB = require('../db/nodejs-orm/handleDB')
class CityController {
    async getCityById(ctx, next) {
        let result = await handleDB(ctx, 'city', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
    async getCityByName(ctx, next) {
        let result = await handleDB(ctx, 'city', 'find', `name = "${ctx.query.name}"`)
        ctx.body = result
    }
}

module.exports = new CityController()