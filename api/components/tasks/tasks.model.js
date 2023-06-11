/*
  User model

  This file is a model of a task that uses the mongoose library to interact with a MongoDB database.
  The file defines a schema called "taskSchema" that represents the structure of the documents to be
  stored in the "tasks" collection.
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  status: {
    type: Boolean,
    default: false
  },
  task: {
    type: String,
    require: true
  }
})

const taskModel = mongoose.model('tasks', taskSchema)

module.exports = taskModel
