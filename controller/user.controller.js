const userService = require("../service/user.service")

class UserController {
  async getUserInfoById(ctx, next) {
    const { userInfo } = ctx
    
    const [userInfoRes] = await userService.getUserInfoById(userInfo.id)
    
    ctx.body = {
      id: userInfoRes.id,
      name: userInfoRes.name,
      amount: userInfoRes.amount,
      token: userInfoRes.token,
      avatar: userInfoRes.avatar,
    }
    await next()
  }
}

module.exports = new UserController()