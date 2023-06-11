/*
  In this file is where we put all the routes, here we put the endpoints and information that has to do with the http protocol

  - GET - Collect information from the server.
  - POST - Add information to the server.
  - PUT - Replace information on the server.
  - PATCH - Update part of the information.
  - DELETE - Delete information from the server.
*/

const express = require('express')
const response = require('../../network/response')
const controller = require('./tasks.controller')
const router = express.Router()

/**
 ** @desc      create a task
 ** @access    public
 ** @route     POST api/tasks
 ** @params    null
 ** @body      { title, task }
 */

router.post('/', async (req, res) => {
  const { task } = req.body
  try {
    const dataTasks = await controller.createTask(task)
    response.success(req, res, dataTasks, 200)
  } catch (error) {
    response.error(req, res, error.message, 400)
  }
})

/**
 ** @desc      update task
 ** @access    public
 ** @route     PUT api/tasks/id
 ** @params    id
 ** @body      one or both { title, task }
 */

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body: task } = req

  try {
    const dataTasks = await controller.updateTask(id, task)
    response.success(req, res, dataTasks, 200)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

/**
 ** @desc      get task by id
 ** @access    public
 ** @route     GET api/tasks/id
 ** @params    id
 ** @body      null
 */

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const dataTasks = await controller.getTaskById(id)
    response.success(req, res, dataTasks, 200)
  } catch (error) {
    response.error(req, res, error.message, 400)
  }
})

/**
 ** @desc      get tasks
 ** @access    public
 ** @route     GET api/tasks
 ** @params    null
 ** @body      null
 */

router.get('/', async (req, res) => {
  try {
    const dataTasks = await controller.getTasks()
    response.success(req, res, dataTasks, 200)
  } catch (error) {
    response.error(req, res, 'Something wrong happend', 500, error)
  }
})

/**
 ** @desc      get tasks finished
 ** @access    public
 ** @route     GET api/tasks/finished
 ** @params    null
 ** @body      null
 */

router.get('/status/finished', async (req, res) => {
  try {
    const dataTasks = await controller.getTasksFinished()
    response.success(req, res, dataTasks, 200)
  } catch (error) {
    response.error(req, res, 'Something wrong happend', 500, error)
  }
})

/**
 ** @desc      delete task
 ** @access    public
 ** @route     DELETE api/tasks/id
 ** @params    id
 ** @body      null
 */

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await controller.deleteTask(id)
    response.success(res, res, `Task ${id} has been removed`)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

/**
 ** @desc      change task status
 ** @access    public
 ** @route     PUT api/tasks/status/id
 ** @params    id
 ** @body      null
 */

router.put('/status/:id', async (req, res) => {
  const { id } = req.params
  const { status } = req.body
  try {
    await controller.taskChangeStauts(id, status)
    response.success(res, res, `Task ${id} has been finished`)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

/**
 ** @desc      change task status
 ** @access    public
 ** @route     PUT api/tasks/status/id
 ** @params    id
 ** @body      null
 */

router.get('/search/all', async (req, res) => {
  const { task } = req.query
  try {
    let result
    if (task) {
      result = await controller.searchTask(task)
    } else {
      result = await controller.getTasks()
    }
    response.success(req, res, result, 200)
  } catch (error) {
    response.error(req, res, error, 400, error)
  }
})

module.exports = router
