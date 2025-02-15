const cdkeyService = require("../service/cdkey.service");

class CdkeyController {
  async exchange(ctx) {
    const { cdkeyInfo, userInfo } = ctx
    const result = await cdkeyService.updateCdkeyStatus(cdkeyInfo.id, userInfo.id)
    console.log(result);
    
    ctx.body = 'exchange'
  }
}

module.exports = new CdkeyController()