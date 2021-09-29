import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'

import Image1 from '../../img/carousel/image1.png'
import Image2 from '../../img/carousel/image2.png'
import Image3 from '../../img/carousel/image3.png'

export const HotelCarousel = () => {
  return (
    <Carousel show={1} slide={1}>
      {[<div>1</div>, <div>123</div>]}
    </Carousel>
  )
}
