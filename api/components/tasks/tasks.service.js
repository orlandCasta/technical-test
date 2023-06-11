/*
  It is in charge of managing the database, here it is specified, where and when the information is saved
*/

const Task = require('./tasks.model')

/**
 ** @desc      create task
 ** @params    object.
 */

const add = async task => {
  const myTask = new Task(task)
  try {
    return await myTask.save()
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update task
 ** @params    id, object.
 */

const update = async (id, task) => {
  return await Task.findOneAndUpdate(id, task, {
    new: true
  })
}

/**
 ** @desc      get task by id
 ** @params    id.
 */

const getById = async id => {
  const data = await Task.findById(id).exec()

  if (data) {
    return data
  } else {
    throw new Error('Task not found')
  }
}

/**
 ** @desc      get tasks
 ** @params    null.
 */

const get = async () => {
  return await Task.find({ status: false })
}

/**
 ** @desc      get tasks
 ** @params    null.
 */

const getFinished = async () => {
  return await Task.find({ status: true })
}

/**
 ** @desc      delete task
 ** @params    id.
 */

const remove = async id => {
  const data = await Task.findByIdAndRemove(id)
  if (!data) {
    throw new Error('Task not found')
  }
}

/**
 ** @desc      search task
 ** @params    id.
 */

const search = async query => {
  const results = await Task.find({
    task: { $regex: `.*${query}`, $options: 'i' },
    status: false
  })

  return results
}

module.exports = {
  add,
  update,
  getById,
  get,
  remove,
  getFinished,
  search
}
