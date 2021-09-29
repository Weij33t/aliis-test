import React from 'react'
import { Hotel } from './../Hotel/Hotel'

import cn from 'classnames'
import styles from './HotelList.module.css'

export const HotelList = ({ hotels, isLikedList, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn(styles.List, { [styles.LikedList]: isLikedList })}
    >
      {hotels.map((hotel) => (
        <Hotel hotel={hotel} key={hotel.hotelId} isLikedList={isLikedList} />
      ))}
    </div>
  )
}
