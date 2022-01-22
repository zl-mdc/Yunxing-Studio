const handleDB = require('../db/nodejs-orm/handleDB')
class LowTemoRouter {
    async getExponents(ctx, next) {
        let result = await handleDB(ctx, 'exponent', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }

}
module.exports = new LowTemoRouter()