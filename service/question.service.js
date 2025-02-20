const connection = require('../sql')

class QuestionService {
  async list() {
    const statement = `
      SELECT
        qt.id, qt.name,
        JSON_ARRAYAGG(JSON_OBJECT('id', qd.id, 'title', qd.title, 'answer', qd.answer)) details
      FROM question_type qt
      LEFT JOIN question_detail qd
      ON qt.id = qd.typeId
      GROUP BY qt.id;
    `
    const [ result ] = await connection.execute(statement)
    return result
  }
}

module.exports = new QuestionService()