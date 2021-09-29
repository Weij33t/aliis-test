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

  console.log(likedHotels)
  return (
    <>
      <TopBar />
      <div className={styles.Hotels}>
        <aside className={styles.Aside}>
          <SearchHotel className={styles.SearchHotel} />
          <LikedHotelList
            className={styles.LikedHotels}
            likedHotels={likedHotels}
          />
        </aside>
        <div className={styles.Main}>
          <div className={styles.HotelsTop}>
            <span className={styles.BreadCrumb}>
              Отели <Caret /> Москва
            </span>
            <span className={styles.Date}>07 июля 2020</span>
          </div>
          <div className={styles.Carousel}>
            <HotelCarousel />
          </div>
          <span className={styles.LikedCount}>
            Добавлено в Избранное: <span> {likedHotels.length}</span> Отеля
          </span>
          <HotelList
            className={styles.HotelList}
            hotels={hotels}
            isLikedList={false}
          />
        </div>
      </div>
    </>
  )
}