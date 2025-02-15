const stadiumService = require("../service/stadium.service")

class StadiumController {
  async list(ctx, next) {
    const result = await stadiumService.list()
    ctx.body = result
    await next()
  }
}

module.exports = new StadiumController()