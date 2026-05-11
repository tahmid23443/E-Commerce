import React from 'react'
import { FaCarSide, FaStar, FaTruck } from 'react-icons/fa'
import { GiBackwardTime } from 'react-icons/gi'
import { IoIosCard } from 'react-icons/io'

const Payment = () => {
  return (
   <section className='py-16  border-b border-b-[#EFEEEE]  '>
     <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className='flex gap-6 text-xs md:text-xl items-center  justify-center'>
            <FaTruck className=' text-7xl text-brand'/>
            <div>
             <h1 className='text-xl'>FREE SHIPPING</h1>
            <p className='text-base text-secondary mt-1 text-center'>Order via Campaign</p>
            </div>

        </div>
        <div className='flex gap-6 items-center justify-center'>
            <FaStar className='text-7xl text-brand'/>

            <div>
             <h1 className='text-xl'>Free Retern</h1>
            <p className='text-base text-secondary mt-1 text-center'>Within 7 days returns</p>
            </div>

        </div>
        <div className='flex gap-6 items-center justify-center'>
            <GiBackwardTime className='text-7xl text-brand'/>

            <div>
             <h1 className='text-xl'>Secure Payment</h1>
            <p className='text-base text-secondary mt-1 text-center'>100% secure payment</p>
            </div>

        </div>
        <div className='flex gap-6 items-center  justify-center'>
           <IoIosCard  className='text-7xl text-brand mt-1'/>

            <div>
             <h1 className='text-xl'>FREE SHIPPING</h1>
            <p className='text-base text-secondary text-center'>Order via Campaign</p>
            </div>

        </div>
     </div>
   </section>
  )
}

export default Payment
