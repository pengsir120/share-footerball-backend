const app = require('./app')
const { APP_PORT, APP_HOST } = require('./env')

app.listen(APP_PORT, () => {
  console.log(`server start at ${APP_HOST}:${APP_PORT}`);
})