import { NavLink } from 'react-router-dom'
import { faCalendar, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Icons } from './../../tasks/components/Icons'
import './styles/Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className='main-container'>
        <div className='row'>
          <div className='barra-lateral col-12 col-sm-auto'>
            <nav className='menu d-flex d-sm-block justify-content-center flex-wrap'>
              <NavLink className='nav-item nav-link' activeClassName='active' to='/'>
                <Icons css='icon' icon={faCalendar} />
                Mi día
              </NavLink>
              <NavLink className='nav-item nav-link' activeClassName='active' to='/tasks'>
                <Icons css='icon' icon={faCircleCheck} />
                Tareas terminadas
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
