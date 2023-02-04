import React from 'react'
import Product from './Product'
import dynamic from "next/dynamic";

const ProductFeed = ({products}) => {
  return (
    <div>
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-14'>
        {products.slice(0,4).map(({id,title,price, description,category,image})=>
        <Product
            key={id}
            title={title}
            price={price}
            description = {description}
            category = {category}
            image = {image}

        />)}
        
        
          <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="IMAGE LOADING" className='md:col-span-full mx-auto' />
          <div className='md:col-span-2'>

          {products.slice(4,5).map(({id,title,price, description,category,image})=>
        <Product
        key={id}
        title={title}
        price={price}
        description = {description}
        category = {category}
        image = {image}
        
        />)}
        </div>
        {products.slice(5,products.length).map(({id,title,price, description,category,image})=>
        <Product
            key={id}
            title={title}
            price={price}
            description = {description}
            category = {category}
            image = {image}

        />)}
    </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(ProductFeed), {ssr: false})