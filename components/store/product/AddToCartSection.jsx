import React from 'react'
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa'

const AddToCartSection = ({setqty, qty, handleAddToCart}) => {
  return (
    <div>
        <div className='mt-4 flex gap-2'>
            <div className='flex items-center'>
              <button className='p-2.5 rounded-s-md border border-[#cccccc]' onClick={() => setqty(qty - 1)} disabled={qty === 1}><FaMinus /></button>
              <div className='size-[38px] flex items-center justify-center border border-[#cccccc]'>{qty}</div>
              <button className='p-2.5 rounded-r-md border border-[#cccccc]' onClick={() => setqty(qty + 1)}><FaPlus /></button>
            </div>
            <button className=' py-1.5 rounded-md border border-[#cccccc] font-semibold px-10 hover:bg-black hover:text-white duration-300' onClick={handleAddToCart}>ADD TO CART</button>
            <button className=' py-1.5 px-2.5 rounded-md border border-[#cccccc] font-semibold text-xl'><FaRegHeart /> </button>
          </div>
    </div>
  )
}

export default AddToCartSection