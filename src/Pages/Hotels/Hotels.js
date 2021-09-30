import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotelCreator } from './../../store/hotelsReducer'

import styles from './Hotels.module.css'
import { HotelList } from './../../Components/HotelList/HotelList'
import { SearchHotel } from './../../Components/SearchHotel/SearchHotel'
import { LikedHotelList } from '../../Components/LikedHotelList/LikedHotelList'
import { Caret } from './../../Components/Shared/Icons/Caret'
import { TopBar } from '../../Components/TopBar/TopBar'
import { HotelCarousel } from './../../Components/HotelCarousel/HotelCarousel'

export const Hotels = () => {
  const hotels = useSelector((state) => state.hotelsReducer.hotels)
  const likedHotels = useSelector((state) => state.likedReducer.liked)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHotelCreator())
  }, [])

  return (
    <>
      <TopBar />
      <div className={styles.Hotels}>
        <aside className={styles.Aside}>
          <SearchHotel className={styles.SearchHotel} />
          <LikedHotelList className={styles.LikedHotels} />
        </aside>
        <div className={styles.Main}>
          <div className={styles.HotelsTop}>
            <span className={styles.BreadCrumb}>
              Отели <Caret /> Москва
            </span>
            <span className={styles.Date}>07 июля 2020</span>
          </div>
          <HotelCarousel />
          <span className={styles.LikedCount}>
            Добавлено в Избранное: <span> {likedHotels.length}</span> Отеля
          </span>
          <HotelList
            isLikedList={false}
            className={styles.HotelList}
            hotels={hotels}
          />
        </div>
      </div>
    </>
  )
}
