const Router = require('@koa/router')
const rechargeController = require('../controller/recharge.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { verifyRecharge } = require('../middleware/recharge.middleware')

const router = new Router({ prefix: '/recharge' })

router.post('/', verifyAuth, verifyRecharge, rechargeController.recharge)

module.exports = router