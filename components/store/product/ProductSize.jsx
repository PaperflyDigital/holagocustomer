import Link from 'next/link'
import React from 'react'

const ProductSize = ({product, selectedSize, setSelectedSize}) => {
  
    return (
        <div>
            <div>
                <p className='text-sm mt-2'>Select Size:</p>
                <div className='flex gap-2 '>
                    {
                        product.inventory.map(item => <div key={item.barCode}>
                            <button onClick={() => setSelectedSize(item)} className={`border  rounded-md w-[50px] py-1.5 text-xs font-semibold ${selectedSize.barCode !== item.barCode ? 'border-[#CCCCCC]' : 'bg-black text-white'}`}>{item.size}</button>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-3'>
                <Link href={''} className='underline  font-medium text-sm'>
                    Size Guide
                </Link>
            </div>
        </div>
    )
}

export default ProductSize