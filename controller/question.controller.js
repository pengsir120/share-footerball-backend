const questionService = require("../service/question.service");

class QuestionController {
  async list(ctx, next) {
    const result = await questionService.list()
    ctx.body = result
    await next()
  }
}

module.exports = new QuestionController()