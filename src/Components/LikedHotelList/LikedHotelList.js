import React, { useState } from 'react'
import { SortButton } from '../Shared/SortButton/SortButton'

import styles from './LikedHotelList.module.css'
import { HotelList } from './../HotelList/HotelList'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAscPriceCreator,
  setAscRatingCreator,
  setDescRatingCreator,
  setDescPriceCreator,
} from '../../store/likedReducer'

export const LikedHotelList = ({ ...rest }) => {
  const dispatch = useDispatch()
  const [isPriceButtonActive, setIsPriceButtonActive] = useState(false)
  const [isRatingButtonActive, setIsRatingButtonActive] = useState(false)
  const rating = useSelector((state) => state.likedReducer.rating)
  const price = useSelector((state) => state.likedReducer.price)
  const likedHotels = useSelector((state) => state.likedReducer.liked)

  const ratingClickHandler = () => {
    if (rating.asc) dispatch(setDescRatingCreator())
    else dispatch(setAscRatingCreator())
    setIsRatingButtonActive(true)
    setIsPriceButtonActive(false)
  }

  const priceClickHandler = () => {
    if (price.asc) dispatch(setDescPriceCreator())
    else dispatch(setAscPriceCreator())
    setIsPriceButtonActive(true)
    setIsRatingButtonActive(false)
  }
  return (
    <div {...rest} className={styles.LikedList}>
      <h2>Избранное</h2>
      <div className={styles.SortButtons}>
        <SortButton
          text={'Рейтинг'}
          onClick={ratingClickHandler}
          isAsc={rating.asc}
          isActive={isRatingButtonActive}
        />
        <SortButton
          text={'Цена'}
          onClick={priceClickHandler}
          isAsc={price.asc}
          isActive={isPriceButtonActive}
        />
      </div>
      <HotelList hotels={likedHotels} isLikedList={true} />
    </div>
  )
}
