const Router = require('@koa/router')
const { verifyAuth } = require('../middleware/auth.middleware')
const userController = require('../controller/user.controller')

const router = new Router({ prefix: '/user' })

router.get('/', verifyAuth, userController.getUserInfoById)

module.exports = router