
import React from 'react'
import { BiCart } from 'react-icons/bi'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router'

const ProductCard = ({ data}) => {
  
  
  return (
 <div className='mt-7 p-2.5 border border-[#E9E9E9] rounded-2xl flex flex-col shadow justify-between bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
    
   
       <div className=' rounded-2xl  overflow-hidden relative'>
       <Link to={`/shop/${data.id}`}>
         <img src={data?.thumbnail} alt="" className='w-full transition-transform duration-300 hover:scale-110'/>
       </Link>
       {
        data?.discountPercentage &&
        
          <p className='absolute top-0 left-0 bg-badge py-1 px-4 l rounded font-semibold text-white text-xs md:text-base'>-${data?.discountPercentage} OFF</p> 
         }
       
       </div>
       <div className='flex gap-1.5 mt-4 '>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>
          <MdOutlineStar className='text-yellow-400 text-xl'/>


          
          <MdOutlineStar className='text-gray-400 text-xl'/>
          <span className='text-secondary'>({data?.rating})</span>

       </div>

       <h4 className='text-xs md:text-xl  font-normal py-4'>
         {data?.title}
       </h4>
        
       <div className='flex justify-between '>
          <p className='text-sm md:text-2xl text-brand'>{data?.price}</p>
         <button>
             {/* <BiCart className='text-lg md:text-2xl text-brand'/> */}
             <img src='/basket.svg'/>
         </button>

       </div>
       
    </div>
  )
}

export default ProductCard
