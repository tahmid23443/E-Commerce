import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router'
import ProductCard from '../../ui/ProductCard'
import { useGetProductsQuery } from '../../services/api'

const FeatureProduct= () => {
     const {data , isLoading , error} = useGetProductsQuery({
       limit : 20,
        skip : 0,
     
     });
  return (
    <section className='py-8'>
       <div className="container">
        <div className='flex justify-between'>
           <h2 className='text-lg md:text-[26px] font-medium'>Featured Product</h2>

           <Link to="/shop" className='text-secondary text-base flex items-center  gap-4'>View more <IoArrowForward className='text-xl'/></Link>
        </div>

         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-5'>
            {
               data?.products.map((item)=>(
            <ProductCard key={item.id} data={item} img="/image (2).png " text="Headrest Executive Mesh Office Chair set"  >

            </ProductCard>

               ))
            }
          
        </div>
       </div>
    </section>
  )
}

export default FeatureProduct
