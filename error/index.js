const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
const { NAME_AND_PASSWORD_IS_REQUIRED, USER_NAME_IS_EXISTS, USER_NAME_IS_NOT_EXISTS, PASSWORD_IS_NOT_CORRECT, TOKEN_IS_INVALID, AMOUNT_IS_INVALID, CODE_IS_INVALID, STADIUM_ID_IS_REQUIRED, ORDER_NO_IS_INVALID, AVATAR_IS_REQUIRED } = require("./errorTypes");

const errorHandler = async (error, ctx) => {
  let status = 200
  let message = 'success'

  switch (error.message) {
    case NAME_AND_PASSWORD_IS_REQUIRED:
      status = 400
      message = NAME_AND_PASSWORD_IS_REQUIRED
      break;
    case USER_NAME_IS_EXISTS:
      status = 400
      message = USER_NAME_IS_EXISTS
      break;
    case USER_NAME_IS_NOT_EXISTS:
      status = 400
      message = USER_NAME_IS_NOT_EXISTS
      break;
    case PASSWORD_IS_NOT_CORRECT:
      status = 400
      message = PASSWORD_IS_NOT_CORRECT
      break;
    case TOKEN_IS_INVALID:
      status = 302
      message = TOKEN_IS_INVALID
      break;
    case AMOUNT_IS_INVALID:
      status = 400
      message = AMOUNT_IS_INVALID
      break;
    case CODE_IS_INVALID:
      status = 400
      message = CODE_IS_INVALID
      break;
    case STADIUM_ID_IS_REQUIRED:
      status = 400
      message = STADIUM_ID_IS_REQUIRED
      break; 
    case ORDER_NO_IS_INVALID:
      status = 400
      message = ORDER_NO_IS_INVALID
      break;
    case AVATAR_IS_REQUIRED:
      status = 400
      message = AVATAR_IS_REQUIRED
      break; 
    default:
      break;
  }

  ctx.status = status
  ctx.message = message
  ctx.body = message

  await wrapperMiddleware(ctx)
}

module.exports = errorHandler