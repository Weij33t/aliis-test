import React from 'react'
import { Home } from '../Shared/Icons/Home'

import styles from './Hotel.module.css'
import { HeartIcon } from './../Shared/Icons/Heart'
import { Rating } from './../Rating/Rating'
import { convertToRubles, getDaysQuantity } from '../../utils/hotel'
import {
  addToLikedCreator,
  removeFromLikedCreator,
} from '../../store/likedReducer'
import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'
import { shortDate } from './../../utils/hotel'

export const Hotel = ({ hotel, isLikedList }) => {
  const dispatch = useDispatch()
  const likedList = useSelector((state) => state.likedReducer.liked)
  const { checkIn, checkOut } = useSelector(
    (state) => state.hotelsReducer.search
  )
  const days = Math.max(
    0,
    useSelector((state) => state.hotelsReducer.days)
  )

  const checkIsInLiked = () =>
    likedList.some((likedHotel) => likedHotel.hotelId === hotel.hotelId)

  const heartClickHandler = () => {
    const isLiked = likedList.some(
      (likedHotel) => likedHotel.hotelId === hotel.hotelId
    )
    return isLiked
      ? dispatch(removeFromLikedCreator(hotel))
      : dispatch(addToLikedCreator(hotel))
  }

  return (
    <div>
      <div className={cn(styles.Hotel, { [styles.LikedHotel]: isLikedList })}>
        <Home className={styles.HotelHome} />
        <span className={styles.HotelName}>{hotel.hotelName}</span>
        <HeartIcon
          className={styles.HotelHeart}
          onClick={() => heartClickHandler()}
        />
        <span className={styles.HotelDate}>
          {' '}
          {shortDate(new Date(checkIn))} - {days} день
        </span>
        <Rating className={styles.HotelRating} rate={hotel.stars} />
        <span className={styles.HotelPrice}>
          Price:{' '}
          <span className={styles.HotelPriceValue}>
            {convertToRubles(hotel.priceFrom)}
          </span>
        </span>
      </div>
    </div>
  )
}
