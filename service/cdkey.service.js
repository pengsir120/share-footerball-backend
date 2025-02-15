const connection = require('../sql')

class CdkeyService {
  async getCdkeyInfoByCode(code) {
    const statement = 'SELECT * FROM cdkey WHERE `code` = ?;'
    const [ result ] = await connection.execute(statement, [code])
    return result
  }

  async updateCdkeyStatus(id, userId) {
    const statement = 'UPDATE cdkey SET status = ?, userId = ? WHERE id = ?;'
    const [ result ] = await connection.execute(statement, [0, userId, id])
    return result
  }
}

module.exports = new CdkeyService()