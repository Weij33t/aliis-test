import { put, takeEvery, call, select } from 'redux-saga/effects'
import { FETCH_HOTELS, setHotelsCreator } from '../store/hotelsReducer'
import { hotelsAPI } from './../api/hotels'

const hotelSelector = (state) => state.hotelsReducer

function* fetchHotelsWorker() {
  const { search } = yield select(hotelSelector)

  const data = yield call(() => hotelsAPI.fetchHotels(search))
  yield put(setHotelsCreator(data))
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}
