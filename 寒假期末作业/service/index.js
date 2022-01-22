const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')
const userRoutes = require('./router/index')
app.use(bodyParser())

userRoutes(app)
app.listen(5500, () => {
    console.log("5500端口开启成功");
})