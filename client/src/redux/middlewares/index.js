import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import errorMiddleware from './error.middleware'

export const history = createBrowserHistory()
export const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(routerMiddleware(history), sagaMiddleware, errorMiddleware)

export default middlewares
