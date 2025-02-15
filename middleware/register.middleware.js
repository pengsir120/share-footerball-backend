const { NAME_AND_PASSWORD_IS_REQUIRED, USER_NAME_IS_EXISTS } = require("../error/errorTypes");
const userService = require("../service/user.service");

const verifyRegister = async (ctx, next) => {
  const { name, password } = ctx.request.body

  console.log(name, password);
  
  if(!name || !password) {
    return ctx.app.emit("error", new Error(NAME_AND_PASSWORD_IS_REQUIRED), ctx)
  }

  const result = await userService.getUserInfoByName(name)

  if(result.length) {
    return ctx.app.emit("error", new Error(USER_NAME_IS_EXISTS), ctx)
  }

  await next()
}

module.exports = {
  verifyRegister
}