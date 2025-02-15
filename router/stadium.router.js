const Router = require('@koa/router')
const stadiumController = require('../controller/stadium.controller')

const router = new Router({ prefix: '/stadium' })

router.get('/list', stadiumController.list)

module.exports = router