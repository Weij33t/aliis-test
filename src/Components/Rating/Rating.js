import React from 'react'
import { EmptyStar } from '../Shared/Icons/EmptyStar'
import { FilledStar } from '../Shared/Icons/FilledStar'

export const Rating = ({ rate, ...rest }) => {
  const renderStars = (number) => {
    const stars = [
      <EmptyStar key={0} />,
      <EmptyStar key={1} />,
      <EmptyStar key={2} />,
      <EmptyStar key={3} />,
      <EmptyStar key={4} />,
    ]
    for (let i = 0; i < number; i++) {
      stars[i] = <FilledStar key={i} />
    }
    return stars
  }
  return <div {...rest}>{renderStars(rate)}</div>
}
