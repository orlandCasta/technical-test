import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { createTaskRequest, loadAllTasksRequest } from './../tasks.redux'

const InputTask = props => {
  return (
    <Formik
      initialValues={{
        task: ''
      }}
      onSubmit={(valores, { resetForm }) => {
        if (valores.task === '') return
        props.createTaskRequest(valores)
        props.loadAllTasksRequest()
        props.loadAllTasksRequest()
        resetForm()
      }}>
      {() => (
        <Form>
          <div className='form-group'>
            <Field
              type='text'
              className='form-control main-input-task'
              id='task'
              name='task'
              placeholder='Añadir tarea'
              minLength='1'
              maxLength='40'></Field>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = { createTaskRequest, loadAllTasksRequest }

export default connect(null, mapDispatchToProps)(InputTask)
