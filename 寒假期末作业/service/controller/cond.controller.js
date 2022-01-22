const handleDB = require('../db/nodejs-orm/handleDB')
class highCondController {
    async gethighConds(ctx, next) {
        let result = await handleDB(ctx, 'high_cond', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
    async getlowConds(ctx, next) {
        let result = await handleDB(ctx, 'low_cond', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
}

module.exports = new highCondController()