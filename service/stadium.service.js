const connection = require('../sql')

class StadiumService {
  async list() {
    const statement = 'SELECT * FROM stadium'
    const [ result ] = await connection.execute(statement)
    return result
  }
}

module.exports = new StadiumService()