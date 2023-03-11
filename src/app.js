/* eslint-disable no-console */
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()

app.use('/ping', (_, res) => {
  res.send('pong')
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const shutdown = () => {
  server.close(() => {
    console.info('Server closed')
  })
}

// SIGTERM = App is politely being asked to terminate, e.g. kill PID.
process.on('SIGTERM', () => {
  console.info('Process received SIGTERM')
  shutdown()
})
