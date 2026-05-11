import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const ShowMore = () => {
  return (
    <section className='py-5'>
         <div className="container bg-brand w-fit  flex justify-center items-center gap-1.5 rounded-full px-7 py-3">
            
               <p className='uppercase text-white font-semibold text-base'>Show more</p>
            <FaChevronDown className='text-white' />
           

            
         </div>
    </section>
  )
}

export default ShowMore
