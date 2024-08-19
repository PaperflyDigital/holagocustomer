import React from 'react'
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa'

const AddToCartSection = () => {
  return (
    <div>
        <div className='mt-4 flex gap-2'>
            <div className='flex items-center'>
              <button className='p-2.5 rounded-s-md border border-[#cccccc]'><FaMinus /></button>
              <div className='size-[38px] flex items-center justify-center border border-[#cccccc]'>1</div>
              <button className='p-2.5 rounded-r-md border border-[#cccccc]'><FaPlus /></button>
            </div>
            <button className=' py-1.5 rounded-md border border-[#cccccc] font-semibold px-10'>ADD TO CART</button>
            <button className=' py-1.5 px-2.5 rounded-md border border-[#cccccc] font-semibold text-xl'><FaRegHeart /> </button>
          </div>
    </div>
  )
}

export default AddToCartSection