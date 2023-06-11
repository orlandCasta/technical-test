import { createStore, compose } from 'redux'
import { reducer } from './combineReducers'
import { initSagas } from './initSagas'
import middlewares, { sagaMiddleware } from './middlewares'

export const getStore = () => {
  const hambiente = 'dev'
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    hambiente !== 'production'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancers = composeEnhancers(middlewares)
  const store = createStore(reducer, {}, enhancers)
  initSagas(sagaMiddleware)
  return store
}
