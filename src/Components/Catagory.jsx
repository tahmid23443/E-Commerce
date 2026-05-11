import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGetCategoryListQuery } from '../services/api'

const Catagory = () => {
  const { data } = useGetCategoryListQuery();



  return (
    <section>
      <div className="container">
        <h2 className='sub_head'>Category</h2>

        <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {
            data?.map((item) => (

              <Link key={item} to={`/shop?category=${item}`} className='flex shadow p-4 items-center rounded-xl border border-transparent hover:border-blue-500 transition-colors duration-300'>

                <p className='pl-4 pr-4 '>{item}</p>
                <FaChevronRight className='ml-auto text-primary/60' />

              </Link>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Catagory
