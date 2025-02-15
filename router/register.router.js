const Router = require('@koa/router')
const registerController = require('../controller/register.controller')
const { verifyRegister } = require('../middleware/register.middleware')


const router = new Router({ prefix: '/register' })

router.post('/', verifyRegister,  registerController.register)

module.exports = router