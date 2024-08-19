import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const ProductDetails = () => {
  return (
    <div>
         <p className='text-2xl font-semibold'>Men’s Half Sleeve Polo Shirt (PPR0001)</p>
          <div className='text-xl text-[#E5B80B] flex items-center gap-1 my-3'>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <p className='text-black font-semibold'>4.0</p>
            <p className='text-[#7A7A7A] text-sm'>(50 Ratings)</p>
          </div>
          <div className='flex items-center gap-3 '>
            <p className='font-bold text-2xl'>
              ৳1400
            </p>
            <p className='font-bold text-[#7A7A7A] text-xl line-through'>
              ৳2800
            </p>
            <p className='font-bold text-error text-xl'>
              50% OFF
            </p>
          </div>
    </div>
  )
}

export default ProductDetails