const wrapperMiddleware = async (ctx) => {
  const { body, status } = ctx

  ctx.body = {
    code: status === 200 ? 0 : -1,
    data: status === 200 ? body : null,
    message: status === 200 ? 'success' : ctx.message
  }
}

module.exports = {
  wrapperMiddleware
}