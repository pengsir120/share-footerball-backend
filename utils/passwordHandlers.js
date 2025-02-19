const bcrypt = require('bcrypt')

const passwordEncrypt = async (password) => {
  try {
    const result = await bcrypt.hash(password, 10)
    return result
  } catch (error) {
    console.error('加密出错', error)
    throw error
  }
}

const passwordDecrypt = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash)
    return result
  } catch (error) {
    console.error('加密出错', error)
    throw error
  }
}

module.exports = {
  passwordEncrypt,
  passwordDecrypt
}