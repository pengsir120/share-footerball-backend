const connection = require('../sql')

class OrderService {
  async create(status, orderNo, userId, stadiumId, amount) {
    const statement = 'INSERT INTO `order` (`status`, orderNo, userId, stadiumId, amount) VALUES (?, ?, ?, ?, ?);'
    const [ result ] = await connection.execute(statement, [status, orderNo, userId, stadiumId, amount])
    return result
  }

  async getOrderInfoByOrderNo(orderNo) {
    const statement = 'SELECT * FROM `order` WHERE orderNo = ?;'
    const [ result ] = await connection.execute(statement, [orderNo])
    return result
  }

  async finish(orderNo) {
    const statement = 'UPDATE `order` SET status = ? WHERE orderNo = ?;'
    const [ result ] = await connection.execute(statement, [0, orderNo])
    return result
  }

  async list(userId) {
    const statement = `
      SELECT 
        o.id, o.status, o.orderNo, o.amount, o.createAt, o.updateAt,
        JSON_OBJECT('id', s.id, 'name', s.name, 'address', s.address) stadium
      FROM \`order\` o
      LEFT JOIN \`user\` u
      ON o.userId = u.id
      LEFT JOIN \`stadium\` s 
      ON o.stadiumId = s.id
      WHERE userId = ?;`
    const [ result ] = await connection.execute(statement, [userId])
    return result
  }
}

module.exports = new OrderService()