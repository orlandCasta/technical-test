import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadAllTasksRequest, loadAllTasksFinishedRequest } from './../tasks.redux'
import './styles/MyDay.css'
import TaskFinished from '../components/TaskFinished'
import Tasks from '../components/Tasks'
import InputTask from '../components/InputTask'
import { getCurrentDate } from '../helpers/currentDate'

const MyDay = props => {
  const { list, finished } = props
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setCurrentDate(getCurrentDate())
    props.loadAllTasksRequest()
    props.loadAllTasksFinishedRequest()
  }, [])

  return (
    <div className='my-day-container'>
      {list?.data?.length > 0 && (
        <div className='page-info'>
          <div className='page-info-icon'>
            <h4>Tareas por completa</h4>
            <p>{currentDate}</p>
          </div>
        </div>
      )}
      <InputTask />
      {list?.data?.length > 0 && <Tasks />}
      {finished?.data?.length > 0 && <TaskFinished />}
    </div>
  )
}

const mapStateToProps = ({ task }) => ({
  list: task.list,
  finished: task.finished
})

const mapDispatchToProps = { loadAllTasksRequest, loadAllTasksFinishedRequest }

export default connect(mapStateToProps, mapDispatchToProps)(MyDay)
