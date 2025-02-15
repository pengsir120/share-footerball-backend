const { NAME_AND_PASSWORD_IS_REQUIRED, USER_NAME_IS_NOT_EXISTS, PASSWORD_IS_NOT_CORRECT } = require("../error/errorTypes")
const userService = require("../service/user.service")
const { passwordDecrypt } = require("../utils/passwordHandlers")

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  
  if(!name || !password) {
    return ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRED), ctx)
  }

  const result = await userService.getUserInfoByName(name)

  if(!result.length) {
    return ctx.app.emit('error', new Error(USER_NAME_IS_NOT_EXISTS), ctx)
  }

  const [ userInfo ] = result
  
  // const verifyPassword = await passwordDecrypt(password, userInfo.password)

  // if(!verifyPassword) {
  //   return ctx.app.emit('error', new Error(PASSWORD_IS_NOT_CORRECT), ctx)
  // }

  ctx.userInfo = userInfo

  await next()
}

module.exports = {
  verifyLogin
}