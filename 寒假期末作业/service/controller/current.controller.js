const db = require('../db/nodejs-orm/index')
const handleDB = require('../db/nodejs-orm/handleDB')
class CurrentController {
    async getList(ctx, next) {
        console.log(ctx.params);
        let result = await handleDB(ctx, 'current', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
}

module.exports = new CurrentController()