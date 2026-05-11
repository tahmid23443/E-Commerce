import React, { useEffect, useState } from 'react'
import SelectInput from '../ui/Selectinput'
import ProductCard from '../ui/ProductCard'
import { Link, useSearchParams } from 'react-router-dom'
import { useGetCategoryListQuery, useGetProductsQuery } from '../services/api'
import { FaFilter } from 'react-icons/fa'
import { Pagination } from '../ui/Pagination'

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  console.log(category)


  const [limit, setLimit] = useState(30);
  const [pageNum, SetPageNum] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const { data, isLoading, error, isFetching } = useGetProductsQuery({
    limit,
    skip: limit * (pageNum - 1),
    category,


  })
  const { data: categories } = useGetCategoryListQuery();

  useEffect(() => {
    console.log(data)
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / limit))
    }
  }, [data?.total, limit]);
  

  const sortoption = [
    {
      value: "10",
      label: "10"
    },
    {
      value: "30",
      label: "30"
    },
    {
      value: "50",
      label: "50"
    },
    {
      value: "80",
      label: "80"
    }
  ]


  return (
    <main className='py-12 '>
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">



        <div className="col-span-1 lg:col-span-3 py-6 px-4 lg:px-5 bg-white h-fit sticky top-0 left-0 lg:block">
          <h3 className='text-base lg:text-lg  font-medium text-primary'>Related Categories</h3>
          <div className='py-6 lg:py-12 my-4 lg:my-6 border-y-2 border-y-secondary/10'>
            <h3 className='text-base lg:text-lg font-medium text-primary'>Filter by Price</h3>
            <input type="Range" className='w-full lg:w-64 my-4 lg:my-7' />
            <p className='text-sm lg:text-base'><span className='text-primary/50'>Price:</span> ৳1000 - ৳2500 </p>
          </div>
          <div className='space-y-4 lg:space-y-5 mt-4'>

            {
              categories?.map((item) => (

                <Link to={`/shop?category=${item}`} key={item} className=' hover:text-blue-600 block text-base  text-secondary/90 capitalize  '>{item}</Link>

              ))
            }


          </div>
        </div>
        <div className='col-span-1 lg:col-span-9'>

          <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
            <div>

              <p className='font-medium text-sm lg:text-lg text-[#424241]/50'>Showing  <span className='text-secondary'> {data?.total ? limit * (pageNum - 1) + 1 : 0} - {data?.total > limit * pageNum ? limit * pageNum : data?.total} </span>of <span className='text-secondary'>{data?.total}</span> product</p>
            </div>
            <div className='flex items-center  gap-3 lg:gap-7 ' >
              <p className='whitespace-nowrap text-sm lg:text-base'>Display</p>
              <SelectInput className='max-w-20' options={sortoption} value={limit} onChange={(e) => setLimit(e.target.value)} />



            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>

            {

              isLoading || isFetching 
               ? Array(8).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-3"></div>
                  <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              ))
                : data?.products?.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))

            }



          </div>
          <Pagination
            handlechange={(num) => SetPageNum(num)}
            pageNum={pageNum}
            totalPage={totalPage}
          />
        </div>
      </div>
    </main>
  )
}

export default Shop
