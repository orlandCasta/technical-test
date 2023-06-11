import { useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { searchTaskRequest } from './../../tasks/tasks.redux'
import './styles/Navbar.css'

const Navbar = props => {
  const [search, setSearch] = useState('')

  const handleInputChange = (fieldName, event) => {
    const { value } = event.target
    setSearch(value)
    props.searchTaskRequest({ [fieldName]: value })
  }

  return (
    <div className='navbar'>
      <div>
        <Formik>
          {() => (
            <Form>
              <div className='form-group'>
                <Field
                  type='text'
                  className='form-control main-input-search'
                  id='task'
                  name='search'
                  placeholder='Buscar tareas pendientes'
                  onChange={event => handleInputChange('task', event)}
                  value={search}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className='navbar-label'>
        <label>My ToDo App</label>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  searchTaskRequest
}

export default connect(null, mapDispatchToProps)(Navbar)
