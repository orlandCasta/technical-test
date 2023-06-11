/* 
  This file loads environment variables from an .env file using dotenv, defines a config object with 
  properties for the database URL and port, and exports this object so it can be used in other project files. 
  This allows for a flexible and modularized setup for your Node.js project.
*/

require('dotenv').config()

const config = {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL
}

module.exports = config
