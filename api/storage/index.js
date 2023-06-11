/* 
  Database configuration

  This file configures and establishes the connection to a MongoDB database using Mongoose,
  and provides console messages to indicate whether the connection was successful or if an error occurred.
*/

const config = require('./../config')
const mongoose = require('mongoose')
const chalk = require('chalk')

const connect = async () => {
  try {
    await mongoose.connect(config.mongodb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(chalk.green('[ Connection established to mongodb database successful ]'))
  } catch (error) {
    console.error(chalk.red(`[ Error connecting to the database:', ${error} ]`))
  }
}

module.exports = connect
