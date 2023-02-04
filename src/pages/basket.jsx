import React, { useContext } from 'react'
import Header from "../components/Header"
import CheckoutProduct from '../components/CheckoutProduct'
import {useSession} from "next-auth/react"
import BasketContext from '@/components/BasketContext'


const Basket = () => {
    const {data:session} = useSession()
    const basket = useContext(BasketContext)


  return (
    <div className=' bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-2xl bg-gray-100 p-4'>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm'>
                <img
                src='https://images-eu.ssl-images-amazon.com/images/G/31/NAB/Banner_Corporate-bulk.jpg'
                className='w-[1080px] h-[200px]'
                style={{objectFit:"contain"}}
                />
                <div className='flex flex-col p-5 bg-white space-y-10'>
                    <h1 className='text-3xl border-b pb-4'>{basket.items.length === 0 ? "Your shopping cart is Empty":"Your Shopping Basket"}</h1>
                </div>         
            
            {basket.items.map((item,i)=><CheckoutProduct

                                        key={i}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        description={item.description}
                                        category={item.category}
                                        hasPrime={item.hasPrime}
                                        rating={item.rating}
                                        
                                        />)}
            </div> 
            {console.log(basket.items)}
            {/* right */}
            
            <div className='flex flex-col bg-white p-10 shadow-md space-y-5'>
                    {basket.items.length>0&&<>
                        <h2>Subtotal: ({basket.items.length}items) 
                        <br />
                        <span className='font-bold'>
                            <p>$132</p>

                        </span>
                        </h2>
                        <button
                        disabled={!session}
                        className={session?`button`:"bg-gradient-to-t from-gray-300 to-gray-500 border-gray-200 text-gray-300 rounded-sm p-3 cursor-not-allowed "}>
                            {!session ? "signin to checkout":"Checkout"}
                        </button>
                    
                    </>}
            </div>
        </main>
    </div>
  )
}

export default Basket