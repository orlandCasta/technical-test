import axios from 'axios'
import swal from 'sweetalert'
import { getSafe } from '../../utils/helpers'
import { goBack } from 'connected-react-router'

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
)

const errorMiddleware = (store) => (next) => (action) => {
  if (action.type && action.type.includes('_FAILURE')) {
    const error = action.payload
    const message = getSafe(() => error.data.message) || ''
    const description = getSafe(() => error.data.description, '') || ''
    if (message) {
      swal(message, description, 'warning')
      if (message === 'Registro ya existente') {
        store.dispatch(goBack())
      }
    }
  }

  const result = next(action)
  return result
}

export default errorMiddleware
