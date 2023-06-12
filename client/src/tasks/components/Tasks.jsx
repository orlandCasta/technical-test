import { useState } from 'react'
import { connect } from 'react-redux'
import {
  changeStatusTaskRequest,
  loadAllTasksRequest,
  loadAllTasksFinishedRequest,
  updateTaskRequest
} from './../tasks.redux'

const Tasks = props => {
  const { list } = props
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editedTask, setEditedTask] = useState('')

  const handleStatus = (id, status) => {
    props.changeStatusTaskRequest(id, { status: status })
    props.loadAllTasksRequest()
    props.loadAllTasksRequest()
    props.loadAllTasksFinishedRequest()
    props.loadAllTasksFinishedRequest()
  }

  const handleEdit = taskId => {
    if (taskId === editingTaskId) {
      list.data.find(task => task._id === taskId).task = editedTask
      setEditingTaskId(null)
      props.updateTaskRequest(taskId, { task: editedTask })
      props.loadAllTasksRequest()
      props.loadAllTasksRequest()
    } else {
      setEditingTaskId(taskId)
      setEditedTask(list.data.find(task => task._id === taskId).task)
    }
  }

  const handleChange = e => {
    const { value } = e.target
    setEditedTask(value)
  }

  return (
    <>
      {list.data.map(task => (
        <div className='task-list' key={task._id}>
          <div className='task-list-container'>
            <div className='form-check edit'>
              {editingTaskId === task._id ? (
                <>
                  <div>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckIndeterminate'
                      onClick={() => handleStatus(task._id, task.status)}
                      defaultChecked={task.status} // Cambio: Usar defaultChecked en lugar de checked
                    />
                    <input
                      type='text'
                      className='edited-task-input'
                      value={editedTask}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn btn-primary'
                      onClick={() => handleEdit(task._id)}>
                      Guardar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckIndeterminate'
                      onClick={() => handleStatus(task._id, task.status)}
                      defaultChecked={task.status} // Cambio: Usar defaultChecked en lugar de checked
                    />
                    <label className='form-check-label' htmlFor='flexCheckIndeterminate'>
                      {task.task}
                    </label>
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn btn-primary'
                      onClick={() => handleEdit(task._id)}>
                      Editar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = ({ task }) => ({
  list: task.list
})

const mapDispatchToProps = {
  changeStatusTaskRequest,
  loadAllTasksRequest,
  loadAllTasksFinishedRequest,
  updateTaskRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
