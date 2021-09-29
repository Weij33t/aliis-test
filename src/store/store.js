import { applyMiddleware, combineReducers, createStore } from 'redux'
import { hotelsReducer } from './hotelsReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga/rootWatcher'
import { likedReducer } from './likedReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  hotelsReducer,
  likedReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
