const bcrypt = require('bcrypt')

const passwordEncrypt = async (password) => {
  const result = await bcrypt.hash(password, 10)
  return result
}

const passwordDecrypt = async (password, hash) => {
  const result = await bcrypt.compare(password, hash)
  return result
}

module.exports = {
  passwordEncrypt,
  passwordDecrypt
}