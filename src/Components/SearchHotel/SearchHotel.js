import React from 'react'
import { Input } from '../Shared/Input/Input'

import styles from './SearchHotel.module.css'
import { Button } from './../Shared/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotelCreator, setSearchCreator } from '../../store/hotelsReducer'
import { getDay } from '../../utils/hotel'
import { formatDate } from './../../utils/hotel'

export const SearchHotel = ({ ...rest }) => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.hotelsReducer.search)
  const labelOverrideStyle = {
    fontWeight: '500',
  }

  const setLocation = (value) =>
    dispatch(setSearchCreator({ ...search, location: value }))
  const setCheckIn = (value) =>
    dispatch(setSearchCreator({ ...search, checkIn: formatDate(value) }))
  const setCheckOut = (value) =>
    dispatch(setSearchCreator({ ...search, checkOut: getDay(value) }))

  return (
    <div {...rest} className={styles.SearchHotel}>
      <Input
        onChange={(e) => setLocation(e.target.value)}
        value={search.location}
        label={'Локация'}
        error={null}
        labelStyles={labelOverrideStyle}
      />
      <Input
        label={'Дата заселения'}
        error={null}
        labelStyles={labelOverrideStyle}
        type={'date'}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <Input
        label={'Количество дней'}
        defaultValue={1}
        error={null}
        labelStyles={labelOverrideStyle}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <Button onClick={() => dispatch(fetchHotelCreator())} value={'Найти'} />
    </div>
  )
}
