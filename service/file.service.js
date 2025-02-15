const connection = require('../sql')

class FileService {
  async getFileInfoByFileName(filename) {
    const statement = 'SELECT * FROM file WHERE filename = ?;'
    const [ result ] = await connection.execute(statement, [filename])
    return result
  }
}

module.exports = new FileService()