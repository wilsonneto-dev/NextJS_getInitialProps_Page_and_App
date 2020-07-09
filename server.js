const express = require('express')
const next = require('next')
const i18nMiddleware = require('next-translate/i18nMiddleware').default
const i18nConfig = require('./i18n')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10) || 3000

server.use(
  i18nMiddleware(i18nConfig, {
    removeLngFromUrl: false,
  })
)

server.get('*', handle)

module.exports = app
  .prepare()
  .then(() =>
    server.listen(SERVER_PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${SERVER_PORT}`)
    })
  )
  .catch(console.error)
