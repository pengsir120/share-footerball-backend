const fs = require('node:fs')

class FileController {
  async read(ctx) {
    const { filename, mimetype } = ctx.fileInfo
    ctx.set('Content-Type', mimetype)
    ctx.body = fs.createReadStream(`./uploads/${filename}`)
  }
}

module.exports = new FileController()