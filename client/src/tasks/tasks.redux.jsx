/*
  Export's
*/

export const LOAD_ALL_TASKS_REQUEST = 'LOAD_ALL_TASKS_REQUEST'
export const LOAD_ALL_TASKS_SUCCESS = 'LOAD_ALL_TASKS_SUCCESS'
export const LOAD_ALL_TASKS_FAILURE = 'LOAD_ALL_TASKS_FAILURE'

export const LOAD_ALL_TASKS_FINISHED_REQUEST = 'LOAD_ALL_TASKS_FINISHED_REQUEST'
export const LOAD_ALL_TASKS_FINISHED_SUCCESS = 'LOAD_ALL_TASKS_FINISHED_SUCCESS'
export const LOAD_ALL_TASKS_FINISHED_FAILURE = 'LOAD_ALL_TASKS_FINISHED_FAILURE'

export const CHANGE_STATUS_TASK_REQUEST = 'CHANGE_STATUS_TASK_REQUEST'
export const CHANGE_STATUS_TASK_SUCCESS = 'CHANGE_STATUS_TASK_SUCCESS'
export const CHANGE_STATUS_TASK_FAILURE = 'CHANGE_STATUS_TASK_FAILURE'

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST'
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS'
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE'

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE'

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST'
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS'
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE'

export const SEARCH_TASK_REQUEST = 'SEARCH_TASK_REQUEST'
export const SEARCH_TASK_SUCCESS = 'SEARCH_TASK_SUCCESS'
export const SEARCH_TASK_FAILURE = 'SEARCH_TASK_FAILURE'

/*
  Action's
*/

export const loadAllTasksRequest = payload => ({
  type: LOAD_ALL_TASKS_REQUEST,
  payload
})
export const loadAllTasksSuccess = payload => ({
  type: LOAD_ALL_TASKS_SUCCESS,
  payload
})
export const loadAllTasksFailure = error => ({
  type: LOAD_ALL_TASKS_FAILURE,
  error
})

export const loadAllTasksFinishedRequest = payload => ({
  type: LOAD_ALL_TASKS_FINISHED_REQUEST,
  payload
})
export const loadAllTasksFinishedSuccess = payload => ({
  type: LOAD_ALL_TASKS_FINISHED_SUCCESS,
  payload
})
export const loadAllTasksFinishedFailure = error => ({
  type: LOAD_ALL_TASKS_FINISHED_FAILURE,
  error
})

export const changeStatusTaskRequest = (id, payload) => ({
  type: CHANGE_STATUS_TASK_REQUEST,
  payload,
  id
})
export const changeStatusTaskSuccess = payload => ({
  type: CHANGE_STATUS_TASK_SUCCESS,
  payload
})
export const changeStatusTaskFailure = error => ({
  type: CHANGE_STATUS_TASK_FAILURE,
  error
})

export const createTaskRequest = payload => ({
  type: CREATE_TASK_REQUEST,
  payload
})
export const createTaskSuccess = payload => ({
  type: CREATE_TASK_SUCCESS,
  payload
})
export const createTaskFailure = error => ({
  type: CREATE_TASK_FAILURE,
  error
})

export const deleteTasksRequest = id => ({
  type: DELETE_TASK_REQUEST,
  id
})
export const deleteTasksSuccess = payload => ({
  type: DELETE_TASK_SUCCESS,
  payload
})
export const deleteTasksFailure = error => ({
  type: DELETE_TASK_FAILURE,
  error
})

export const updateTaskRequest = (id, payload) => ({
  type: UPDATE_TASK_REQUEST,
  id,
  payload
})
export const updateTaskSuccess = payload => ({
  type: UPDATE_TASK_SUCCESS,
  payload
})
export const updateTaskFailure = error => ({
  type: UPDATE_TASK_FAILURE,
  error
})

export const searchTaskRequest = payload => ({
  type: SEARCH_TASK_REQUEST,
  payload
})
export const searchTaskSuccess = payload => ({
  type: SEARCH_TASK_SUCCESS,
  payload
})
export const searchTaskFailure = error => ({
  type: SEARCH_TASK_FAILURE,
  error
})

/*
  Reducer
*/

const initialState = {
  list: [],
  finished: [],
  view: {},
  loading: false,
  error: null
}

export function task(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_TASKS_SUCCESS:
    case SEARCH_TASK_SUCCESS:
      return { ...state, list: { ...action.payload } }
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        view: { ...action.payload }
      }
    case LOAD_ALL_TASKS_FINISHED_SUCCESS:
      return { ...state, finished: { ...action.payload } }
    case CREATE_TASK_SUCCESS:
    case DELETE_TASK_SUCCESS:
    case CHANGE_STATUS_TASK_SUCCESS:
      return { ...state }
    case LOAD_ALL_TASKS_FAILURE:
    case LOAD_ALL_TASKS_FINISHED_FAILURE:
    case CREATE_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
    case SEARCH_TASK_FAILURE:
    case CHANGE_STATUS_TASK_FAILURE:
      return { ...state, loading: false, error: action.error }
    case LOAD_ALL_TASKS_REQUEST:
    case LOAD_ALL_TASKS_FINISHED_REQUEST:
    case CREATE_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
    case UPDATE_TASK_REQUEST:
    case SEARCH_TASK_REQUEST:
    case CHANGE_STATUS_TASK_REQUEST:
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}
