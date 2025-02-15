const Router = require('@koa/router')
const uploadController = require('../controller/upload.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { uploadAvatar, verifyUploadAvatar } = require('../middleware/upload.middleware')

const router = new Router({ prefix: '/upload' })

router.post('/avatar', verifyAuth, uploadAvatar, verifyUploadAvatar, uploadController.avatar)

module.exports = router