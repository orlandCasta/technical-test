const express = require('express')
const config = require('./config')
const tasks = require('./components/tasks/tasks.routes')
const cors = require('cors')
const app = express()
const chalk = require('chalk')
const mongooseConnection = require('./storage')

// server configuration
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/api/tasks', tasks)

// static files
app.use('/app', express.static('public'))

// starting server
app.listen(config.port, err => {
  if (err) console.error()
  else {
    mongooseConnection('')
    console.log(chalk.green('[ Server started ]'))
    console.log(chalk.green(`[ http://localhost:${config.port}/api ]`))
  }
})
