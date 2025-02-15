const { STADIUM_ID_IS_REQUIRED, ORDER_NO_IS_INVALID } = require("../error/errorTypes")
const orderService = require("../service/order.service")
const { orderNoGenerate } = require("../utils/orderNoHandlers")

const verifyOrderCreate = async (ctx, next) => {
  const { stadiumId } = ctx.request.body

  if(!stadiumId) {
    return ctx.app.emit('error', new Error(STADIUM_ID_IS_REQUIRED), ctx)
  }

  const status = Math.round(Math.random())
  const orderNo = orderNoGenerate()

  ctx.orderInfo = {
    stadiumId,
    status,
    orderNo
  }

  await next()
}

const verifyOrderFinish = async (ctx, next) => {
  const { orderNo } = ctx.request.body

  if(!orderNo) {
    return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
  }

  const [ orderInfo ] = await orderService.getOrderInfoByOrderNo(orderNo)

  if(!orderInfo) {
    return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
  }

  if(!orderInfo.status) {
    return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
  }

  ctx.orderInfo = {
    orderNo
  }

  console.log(orderInfo);
  
  await next()
}

module.exports = {
  verifyOrderCreate,
  verifyOrderFinish
}