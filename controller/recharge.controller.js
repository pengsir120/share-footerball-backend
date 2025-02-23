const rechargeService = require("../service/recharge.service");
const userService = require("../service/user.service");

class RechargeController {
  async recharge(ctx, next) {
    const { id: userId, name } = ctx.userInfo
    const { amount, status, orderNo } = ctx.orderInfo

    console.log(userId, amount, status, orderNo, name);
    const result = await rechargeService.recharge(amount, orderNo, userId, status)
    if(result.insertId) {
      if(status) {
        const [ userInfo ] = await userService.getUserInfoByName(name)
        await userService.updateUserAmount((+userInfo.amount) + amount, userId)
        ctx.body = '充值成功'
      }else {
        ctx.body = '充值失败'
      }
    }
    // ctx.body = 'recharge'
    await next()
  }
}

module.exports = new RechargeController()