const handleDB = require('../db/nodejs-orm/handleDB')
class LowTemoRouter {
    async getLowTemp(ctx, next) {
        let result = await handleDB(ctx, 'low_temp', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
    async getHighTemp(ctx, next) {
        let result = await handleDB(ctx, 'high_temp', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
}
module.exports = new LowTemoRouter()