import React from 'react'
import { Home } from '../Shared/Icons/Home'

import styles from './Hotel.module.css'
import { HeartIcon } from './../Shared/Icons/Heart'
import { Rating } from './../Rating/Rating'
import { convertToRubles } from '../../utils/hotel'
import {
  addToLikedCreator,
  removeFromLikedCreator,
} from '../../store/likedReducer'
import { useDispatch } from 'react-redux'

import cn from 'classnames'

export const Hotel = ({ hotel, isLikedList }) => {
  const dispatch = useDispatch()

  const heartClickHandler = () => {
    return hotel.isLiked
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
        <span className={styles.HotelDate}> 28 june 2021 - 1 день</span>
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
