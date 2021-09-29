import { sortLiked } from '../utils/liked'

const initialState = {
  rating: { asc: true },
  price: { asc: true },
  liked: [],
}

export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED'

export const SET_ASC_PRICE = 'SET_ASC_PRICE'
export const SET_DESC_PRICE = 'SET_DESC_PRICE'
export const SET_ASC_RATING = 'SET_ASC_RATING'
export const SET_DESC_RATING = 'SET_DESC_RATING'

export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      if (action.payload.isLiked) return state
      return {
        ...state,
        liked: [...state.liked, { isLiked: true, ...action.payload }],
      }
    case REMOVE_FROM_LIKED:
      return {
        ...state,
        liked: state.liked.filter(
          (hotel) => hotel.hotelId !== action.payload.hotelId
        ),
      }
    case SET_ASC_PRICE:
      return {
        ...state,
        price: { asc: true },
        liked: sortLiked([...state.liked], 'priceFrom', 'asc'),
      }
    case SET_DESC_PRICE:
      return {
        ...state,
        price: { asc: false },
        liked: sortLiked([...state.liked], 'priceFrom', 'desc'),
      }
    case SET_ASC_RATING:
      return {
        ...state,
        rating: { asc: true },
        liked: sortLiked([...state.liked], 'stars', 'asc'),
      }
    case SET_DESC_RATING:
      return {
        ...state,
        rating: { asc: false },
        liked: sortLiked([...state.liked], 'stars', 'desc'),
      }
    default:
      return state
  }
}

export const setAscPriceCreator = () => ({ type: SET_ASC_PRICE })
export const setDescPriceCreator = () => ({ type: SET_DESC_PRICE })

export const setAscRatingCreator = () => ({ type: SET_ASC_RATING })
export const setDescRatingCreator = () => ({ type: SET_DESC_RATING })

export const addToLikedCreator = (hotel) => ({
  type: ADD_TO_LIKED,
  payload: hotel,
})
export const removeFromLikedCreator = (hotelId) => ({
  type: REMOVE_FROM_LIKED,
  payload: hotelId,
})
