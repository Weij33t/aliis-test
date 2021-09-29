import { all } from 'redux-saga/effects'
import { hotelsWatcher } from './hotelsWatcher'

export function* rootWatcher() {
  yield all([hotelsWatcher()])
}
