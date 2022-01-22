const handleDB = require('../db/nodejs-orm/handleDB')
class TodayController {
    async gettodayConds(ctx, next) {
        let result = await handleDB(ctx, 'today', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
    async gettomorrowConds(ctx, next) {
        let result = await handleDB(ctx, 'tomorrow', 'find', `id = ${ctx.params.id}`)
        ctx.body = result
    }
}
module.exports = new TodayController()