import React from 'react'
import Carousel from 'react-elastic-carousel'

import Image1 from '../../img/carousel/image1.png'
import Image2 from '../../img/carousel/image2.png'
import Image3 from '../../img/carousel/image3.png'

export const HotelCarousel = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1.5 },
    { width: 166, itemsToShow: 3.5 },
  ]
  return (
    <Carousel
      breakPoints={breakpoints}
      showArrows={false}
      pagination={false}
      itemsToShow={3.5}
      itemPadding={[0, 90, 0, 90]}
    >
      <img src={Image1} draggable={false} alt={'hotel'} />
      <img src={Image2} draggable={false} alt={'hotel'} />
      <img src={Image3} draggable={false} alt={'hotel'} />
      <img src={Image1} draggable={false} alt={'hotel'} />
    </Carousel>
  )
}
