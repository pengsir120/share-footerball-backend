const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const staticServer = require('koa-static')
const logger = require('koa-logger')

const errorHandler = require('./error')

const stadiumRouter = require('./router/stadium.router')
const registerRouter = require('./router/register.router')
const loginRouter = require('./router/login.router')
const rechargeRouter = require('./router/recharge.router')
const cdkeyRouter = require('./router/cdkey.router')
const orderRouter = require('./router/order.router')
const avatarRouter = require('./router/upload.router')
const fileRouter = require('./router/file.router')
const { wrapperMiddleware } = require('./middleware/wrapper.middleware')

const app = new Koa()

app.use(bodyParser())
app.use(staticServer('static'))
app.use(logger())

app.use(stadiumRouter.routes())
app.use(stadiumRouter.allowedMethods())
app.use(registerRouter.routes())
app.use(registerRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())
app.use(rechargeRouter.routes())
app.use(rechargeRouter.allowedMethods())
app.use(cdkeyRouter.routes())
app.use(cdkeyRouter.allowedMethods())
app.use(orderRouter.routes())
app.use(orderRouter.allowedMethods())
app.use(avatarRouter.routes())
app.use(avatarRouter.allowedMethods())
app.use(fileRouter.routes())
app.use(fileRouter.allowedMethods())

app.use(wrapperMiddleware)

app.on('error', errorHandler)

module.exports = app