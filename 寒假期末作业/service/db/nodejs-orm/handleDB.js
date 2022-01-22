const db = require('./index')
async function handleDB(res, tableName, methodName, ...args) {
    const model = db.model(tableName)
    let result
    try {
        result = new Promise((resolve, reject) => {
            model[methodName](...args, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
    } catch (err) {
        console.log(err);
        // res.send({errMsg})
        return
    }
    return result
}
module.exports = handleDB