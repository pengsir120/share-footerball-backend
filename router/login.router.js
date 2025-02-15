const Router = require('@koa/router')
const loginController = require('../controller/login.controller')
const { verifyLogin } = require('../middleware/login.middleware')

const router = new Router({ prefix: '/login' })

router.post('/', verifyLogin, loginController.login)

module.exports = router