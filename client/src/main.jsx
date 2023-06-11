import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { getStore } from './redux/configStore'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TodoApp } from './TodoApp'

const store = getStore()
window.store = store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
