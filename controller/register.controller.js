const userService = require("../service/user.service")
const { passwordEncrypt } = require("../utils/passwordHandlers")

class RegisterController {
  async register(ctx) {
    const { name, password } = ctx.request.body    

    const passwordEncrypted = await passwordEncrypt(password + '')

    const result = await userService.register(name, passwordEncrypted)  
    console.log(result);
    
    ctx.body = 'register'
  }
}

module.exports = new RegisterController()