import { connect } from 'react-redux'
import {
  deleteTasksRequest,
  loadAllTasksFinishedRequest,
  changeStatusTaskRequest,
  loadAllTasksRequest
} from './../tasks.redux'

const TaskFinished = props => {
  const { finished } = props

  const handleDelete = id => {
    props.deleteTasksRequest(id)
    props.loadAllTasksFinishedRequest()
    props.loadAllTasksFinishedRequest()
  }

  const handleStatus = (id, status) => {
    props.changeStatusTaskRequest(id, { status: status })
    props.loadAllTasksRequest()
    props.loadAllTasksRequest()
    props.loadAllTasksFinishedRequest()
    props.loadAllTasksFinishedRequest()
  }

  return (
    <>
      <div className='page-info'>
        <div className='page-info-icon'>
          <h4>Tareas completadas</h4>
        </div>
      </div>
      {finished.data.map(task => (
        <div className='task-list' key={task._id}>
          <div className='task-list-container'>
            <div className='form-check finished'>
              <div>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckIndeterminate'
                  onClick={() => handleStatus(task._id, task.status)}
                  checked={task.status}
                />
                <label
                  className='form-check-label task-completed'
                  htmlFor='flexCheckIndeterminate'>
                  {task.task}
                </label>
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleDelete(task._id)}>
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = ({ task }) => ({
  finished: task.finished
})

const mapDispatchToProps = {
  deleteTasksRequest,
  loadAllTasksFinishedRequest,
  changeStatusTaskRequest,
  loadAllTasksRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFinished)
