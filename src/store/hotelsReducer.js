import { getDay } from '../utils/hotel'

const initialState = {
  hotels: [],
  search: {
    checkIn: getDay(),
    checkOut: getDay(1),
    location: 'Москва',
    limit: 10,
  },
}

export const FETCH_HOTELS = 'FETCH_HOTELS'
export const SET_HOTELS = 'SET_HOTELS'

export const SET_SEARCH = 'SET_SEARCH'

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotels: action.payload }

    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    default:
      return state
  }
}

export const fetchHotelCreator = () => ({ type: FETCH_HOTELS })
export const setHotelsCreator = (hotels) => ({
  type: SET_HOTELS,
  payload: hotels,
})

export const setSearchCreator = (search) => {
  return { type: SET_SEARCH, payload: search }
}
