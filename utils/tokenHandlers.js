const jwt = require('jsonwebtoken')
const { PRIVATE_KEY, PUBLIC_KEY } = require('../env')

const tokenGenerate = (payload) => {
  const result = jwt.sign(payload, PRIVATE_KEY, {
    expiresIn: '1d',
    algorithm: 'RS256'
  })
  
  return result
}

const tokenParse = (token) => {
  const result = jwt.verify(token, PUBLIC_KEY, {
    algorithms: ['RS256']
  })

  return result
}

module.exports = {
  tokenGenerate,
  tokenParse
}