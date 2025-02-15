const Router = require('@koa/router')
const orderController = require('../controller/order.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { verifyOrderCreate, verifyOrderFinish } = require('../middleware/order.middleware')

const router = new Router({ prefix: '/order' })

router.post('/create', verifyAuth, verifyOrderCreate, orderController.create)

router.post('/finish', verifyAuth, verifyOrderFinish, orderController.finish)

router.get('/list', verifyAuth, orderController.list)

module.exports = router