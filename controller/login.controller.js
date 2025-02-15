const { tokenGenerate, tokenParse } = require("../utils/tokenHandlers")

class LoginController {
  async login(ctx) {
    const { userInfo } = ctx
    const { id, name, amount } = userInfo

    const token = tokenGenerate({ id, name, amount })

    ctx.body = {
      id,
      name,
      amount,
      token
    }
  }
}

module.exports = new LoginController()