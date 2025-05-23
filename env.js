const fs = require('node:fs')

const APP_HOST = 'www.chenruipengweb.xyz'
const APP_PORT = 9000

const DATABASE_HOST = '47.120.47.109'
const DATABASE_PORT = 3306
const DATABASE_USER = 'root'
const DATABASE_PASSWORD = 'Madeinchina120$'
const DATABASE_NAME = 'share-footerball'

const PRIVATE_KEY = fs.readFileSync('./keys/private_key.pem')
const PUBLIC_KEY = fs.readFileSync('./keys/public_key.pem')

module.exports = {
  APP_HOST,
  APP_PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  PRIVATE_KEY,
  PUBLIC_KEY
}