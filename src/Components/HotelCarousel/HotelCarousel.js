import React from 'react'
import Carousel from 'react-elastic-carousel'

import Image1 from '../../img/carousel/image1.png'
import Image2 from '../../img/carousel/image2.png'
import Image3 from '../../img/carousel/image3.png'

export const HotelCarousel = () => {
  const breakpoints = [
    {
      width: 1,
      itemsToShow: 2,
      itemPadding: [0, 30, 0, 30],
      outerSpacing: 0,
    },

    {
      width: 750,
      itemsToShow: 1,
    },
    {
      width: 1200,
      itemsToShow: 2.5,
      itemPadding: [0, 50, 0, 50],
      outerSpacing: 0,
    },
  ]
  return (
    <Carousel
      breakPoints={breakpoints}
      showArrows={false}
      pagination={false}
      itemPadding={[0, 70, 0, 70]}
      outerSpacing={-10}
      itemsToShow={3.5}
    >
      <img src={Image1} draggable={false} alt={'hotel'} />
      <img src={Image2} draggable={false} alt={'hotel'} />
      <img src={Image3} draggable={false} alt={'hotel'} />
      <img src={Image1} draggable={false} alt={'hotel'} />
    </Carousel>
  )
}
