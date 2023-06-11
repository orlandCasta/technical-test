import { Route, Routes } from 'react-router-dom'
import MyDay from '../tasks/pages/MyDay'
import Tasks from '../tasks/pages/Tasks'
import Navbar from '../ui/components/Navbar'
import Sidebar from '../ui/components/Sidebar'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<MyDay />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
