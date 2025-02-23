const cdkeyService = require("../service/cdkey.service");

class CdkeyController {
  async exchange(ctx, next) {
    const { cdkeyInfo, userInfo } = ctx
    const result = await cdkeyService.updateCdkeyStatus(cdkeyInfo.id, userInfo.id)
    console.log(result);
    
    ctx.body = 'exchange'

    await next()
  }
}

module.exports = new CdkeyController()