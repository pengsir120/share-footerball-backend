const { v4 } = require('uuid')
const orderNoGenerate = () => v4()

module.exports = {
  orderNoGenerate
}