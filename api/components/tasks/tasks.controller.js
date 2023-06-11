/*
  A controller is a function that you write to control data.

  With a self-written controller, you can modify the data the way you want,
  in this file is all the logic, everything that is modify, change or check, is done in that file.
*/

const storage = require('./tasks.service')

/**
 ** @desc   controller method to create task
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const createTask = async task => {
  if (!task) {
    throw new Error('Missing data')
  }

  const newTask = {
    task
  }

  return await storage.add(newTask)
}

/**
 ** @desc   controller method to update task
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const updateTask = async (id, updateTask) => {
  if (!updateTask) {
    throw new Error('Error updating task')
  }

  const filter = {
    _id: id
  }

  const newUpdateTask = await storage.update(filter, updateTask)
  if (!newUpdateTask) {
    throw new Error('Task not found')
  }

  return newUpdateTask
}

/**
 ** @desc   controller method to get task by id
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const getTaskById = async id => {
  if (!id) {
    throw new Error('id needed')
  } else {
    const data = await storage.getById(id)
    return data
  }
}

/**
 ** @desc   controller method to get tasks
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const getTasks = async () => {
  return await storage.get()
}

/**
 ** @desc   controller method to get tasks
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const getTasksFinished = async () => {
  return await storage.getFinished()
}

/**
 ** @desc   controller method to delete task
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const deleteTask = async id => {
  if (id) {
    const filter = {
      _id: id
    }
    return await storage.remove(filter)
  } else {
    throw new Error('Id needed')
  }
}

/**
 ** @desc   controller method to change task status
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const taskChangeStauts = async (id, status) => {
  const filter = {
    _id: id
  }

  const updateTask = {
    status: !status
  }

  const newUpdateTask = await storage.update(filter, updateTask)
  if (!newUpdateTask) {
    throw new Error('Task not found')
  }

  return newUpdateTask
}

/**
 ** @desc   controller method to search task
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 */

const searchTask = async query => {
  if (!query) {
    throw new Error('Missing query')
  }

  const data = await storage.search(query)

  return data
}

module.exports = {
  createTask,
  updateTask,
  getTaskById,
  getTasks,
  deleteTask,
  taskChangeStauts,
  getTasksFinished,
  searchTask
}
