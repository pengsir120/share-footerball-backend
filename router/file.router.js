const Router = require('@koa/router')
const fileController = require('../controller/file.controller')
const { verifyRead } = require('../middleware/file.middleware')

const router = new Router({ prefix: '/file' })

router.get('/:filename', verifyRead, fileController.read)

module.exports = router