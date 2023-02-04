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
            <img  src="https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg" alt="Image" />
        </div>
        <div>
            <img  src="https://m.media-amazon.com/images/I/616+GTPIwHL._SX3000_.jpg" alt="Image" />
        </div>
        <div>
            <img  src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg" alt="Image" />
        </div>

        </Carousel>
    </div>
    </div>
  )
}

export default Banner