import axios from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  LOAD_ALL_TASKS_REQUEST,
  LOAD_ALL_TASKS_FINISHED_REQUEST,
  CHANGE_STATUS_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  CREATE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  SEARCH_TASK_REQUEST,
  searchTaskSuccess,
  searchTaskFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTasksSuccess,
  deleteTasksFailure,
  loadAllTasksSuccess,
  loadAllTasksFailure,
  createTaskSuccess,
  createTaskFailure,
  changeStatusTaskSuccess,
  changeStatusTaskFailure,
  loadAllTasksFinishedSuccess,
  loadAllTasksFinishedFailure
} from './../tasks/tasks.redux'
import Swal from 'sweetalert2'

export function* loadAllTasks() {
  try {
    const url = 'http://localhost:5000/api/tasks'
    const response = yield call(fetch, url)
    const data = yield response.json()

    yield put(loadAllTasksSuccess(data))
  } catch (error) {
    yield put(loadAllTasksFailure(error.message))
  }
}

export function* loadAllTasksFinished() {
  try {
    const url = 'http://localhost:5000/api/tasks/status/finished'
    const { data } = yield call(axios.get, url)

    yield put(loadAllTasksFinishedSuccess(data))
  } catch (error) {
    yield put(loadAllTasksFinishedFailure(error.message))
  }
}

export function* createTask({ payload }) {
  try {
    const url = 'http://localhost:5000/api/tasks'
    const response = yield call(axios.post, url, payload)
    const data = response.data
    yield put(createTaskSuccess(data))
  } catch (error) {
    yield put(createTaskFailure(error))
    console.log(error)
  }
}

export function* deleteTask({ id }) {
  try {
    const url = `http://localhost:5000/api/tasks/${id}`
    const { data } = yield call(axios.delete, url)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea borrada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    yield put(deleteTasksSuccess(data))
  } catch (error) {
    yield put(deleteTasksFailure(error.message))
  }
}

export function* updateTask({ id, payload }) {
  try {
    const url = `http://localhost:5000/api/tasks/${id}`
    const { data } = yield call(axios.put, url, payload)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea actualizada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    yield put(updateTaskSuccess(data))
  } catch (error) {
    yield put(updateTaskFailure(error.message))
  }
}

export function* searchTasks({ payload }) {
  console.log({ payload })
  try {
    const url = `http://localhost:5000/api/tasks/search/all/?task=${payload.task}`
    const { data } = yield call(axios.get, url)
    console.log(data)
    yield put(searchTaskSuccess(data))
  } catch (error) {
    yield put(searchTaskFailure(error.message))
  }
}

export function* changeStatusTask({ id, payload }) {
  console.log(id, payload)
  try {
    const url = `http://localhost:5000/api/tasks/status/${id}`
    const { data } = yield call(axios.put, url, payload)
    yield put(changeStatusTaskSuccess(data))
  } catch (error) {
    yield put(changeStatusTaskFailure(error.message))
  }
}

export function* postTasks() {
  yield all([
    takeLatest(LOAD_ALL_TASKS_REQUEST, loadAllTasks),
    takeLatest(CREATE_TASK_REQUEST, createTask),
    takeLatest(DELETE_TASK_REQUEST, deleteTask),
    takeLatest(UPDATE_TASK_REQUEST, updateTask),
    takeLatest(SEARCH_TASK_REQUEST, searchTasks),
    takeLatest(CHANGE_STATUS_TASK_REQUEST, changeStatusTask),
    takeLatest(LOAD_ALL_TASKS_FINISHED_REQUEST, loadAllTasksFinished)
  ])
}
