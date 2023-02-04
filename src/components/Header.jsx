import React from 'react'
import {AiOutlineSearch } from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import {useContext } from "react"
import BasketContext from './BasketContext'


const Header = () => {
    const{ data:session } = useSession()
    const router = useRouter()
    const basket = useContext(BasketContext)
    const noOfItems = basket.items.length


  return (
    <header>
        {/* top nav */}
        <div className='flex items-center bg-amazon_blue p-1 py-2'>
            {/* logo */}
            <div className='mt-4 flex flex-grow sm:flex-grow-0 items-center' onClick={()=>{router.push("/")}}>
            <img src="http://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer px-3 '
            />
            </div>
            {/* search */}
            <div className='hidden bg-yellow-400 sm:flex hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer '>
              <input type="text" className='p-2 flex-grow rounded-l-md' />
              <AiOutlineSearch className='h-12 mx-4' size={20}/>
            </div>
            {/* right corner */}
            <div className='text-white flex space-x-6 ml-4 items-center mr-4 text-sm whitespace-nowrap'>
              <div  className='link' onClick={!session?signIn:signOut}>
                <p>
                  {
                    session?`Hello ${session.user.name}`:"Sign in"
                  }
                </p>
                <p className='font-bold   md:text-xs'>Address & Lists</p>
              </div >
              <div className='link'>
                <p>Returns</p>
                <p className='font-bold md:text-xs'>& Orders</p>
              </div>
              <div  className='link relative flex items-center p-1' onClick={()=>{router.push("/basket")}}>
                <span className='absolute top-0 right-0 md:right-9 h-4 w-4 items-center flex justify-center bg-yellow-400 rounded-full text-black font-bold'>{noOfItems}</span>
                <AiOutlineShoppingCart size={30}/>
                <p className='text-center font-bold  md:text-xs ml-1 hidden md:inline mt-2'>Basket</p>
              </div>

            </div>
        </div>
        
        
        
        {/* bottom nav */}
        <div className='flex text-sm  space-x-4 bg-amazon_blue-light text-white p-2 pl-4'>
          <FiMenu size={23}/>
          <p className='link '>All</p>
          <p className='link '>Prime Video</p>
          <p className='link '>Amazon pay</p>
          <p className='link '>Amazon Buisness</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Kitchen Appliances</p>
          <p className='link hidden lg:inline-flex'>Books</p>
          <p className='link hidden lg:inline-flex'>Smartphones</p>
          


        </div>
    </header>
  )
}

export default Header