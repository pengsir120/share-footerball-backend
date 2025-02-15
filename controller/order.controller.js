const orderService = require("../service/order.service");
const userService = require("../service/user.service");

class OrderController {
  async create(ctx) {
    console.log(ctx.orderInfo, ctx.userInfo);
    const { status, orderNo, stadiumId } = ctx.orderInfo
    const { id: userId } = ctx.userInfo
    const result = await orderService.create(status, orderNo, userId, stadiumId, status ? 15 : 0)
    if(result.insertId) {
      if(status) {
        ctx.body = orderNo
      } else {
        ctx.body = 'create order failed'
      }
    }
  }

  async finish(ctx) {
    const { orderNo } = ctx.orderInfo
    const { name, id } = ctx.userInfo
    const result = await orderService.finish(orderNo)
    console.log(result);
    
    if(result.affectedRows) {
      const [userInfo] = await userService.getUserInfoByName(name)
      await userService.updateUserAmount(+userInfo.amount - 15 * 100, id)
    }
    ctx.body = 'order finish'
  }

  async list(ctx) {
    const { id: userId } = ctx.userInfo
    const result = await orderService.list(userId)
    ctx.body = result
  }
}

module.exports = new OrderController()