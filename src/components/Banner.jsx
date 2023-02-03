import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
    <div>
        <div className='relative'>
        <div className='absolute h-14 w-full z-20 bg-gradient-to-t from-gray-50 to-transparent bottom-0 '/>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div>
            <img loading='lazy' src="https:/links.papareact.com/gi1" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https:/links.papareact.com/6ff" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https:/links.papareact.com/7ma" alt="" />
        </div>

        </Carousel>
    </div>
    </div>
  )
}

export default Banner