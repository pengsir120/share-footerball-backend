const Router = require('@koa/router')
const questionController = require('../controller/question.controller')

const router = new Router({ prefix: '/question' })

router.get('/list', questionController.list)

module.exports = router