import React from 'react'
import Header from "../components/Header"
import CheckoutProduct from '../components/CheckoutProduct'
import {useSession} from "next-auth/react"

const Basket = () => {
    const items = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}]
    const {data:session} = useSession()


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
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your shopping cart is Empty":"Your Shopping Basket"}</h1>
                </div>         
            
            {items.map((item,i)=><CheckoutProduct

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
            {/* right */}
            
            <div className='flex flex-col bg-white p-10 shadow-md space-y-5'>
                    {items.length>0&&<>
                        <h2>Subtotal: ({items.length}items) 
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