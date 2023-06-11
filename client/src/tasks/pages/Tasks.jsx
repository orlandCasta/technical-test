import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadAllTasksRequest, loadAllTasksFinishedRequest } from './../tasks.redux'
import TaskFinished from '../components/TaskFinished'

const Tasks = props => {
  const { finished } = props

  useEffect(() => {
    props.loadAllTasksRequest()
    props.loadAllTasksFinishedRequest()
  }, [])

  return <>{finished?.data?.length > 0 && <TaskFinished />}</>
}

const mapStateToProps = ({ task }) => ({
  finished: task.finished
})

const mapDispatchToProps = { loadAllTasksRequest, loadAllTasksFinishedRequest }

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
