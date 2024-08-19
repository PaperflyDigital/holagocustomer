import Link from 'next/link'
import React from 'react'

const ProductSize = () => {
    const sizes = [
        {
          name: 'S',
        },
        {
          name: 'M',
        },
        {
          name: 'XL',
        },
        {
          name: '2XL',
        },
        {
          name: '3XL',
        },
      ]
    return (
        <div>
            <div>
                <p className='text-sm mt-2'>Select Size:</p>
                <div className='flex gap-2 '>
                    {
                        sizes.map(item => <div key={item.name}>
                            <button className='border border-[#CCCCCC] rounded-md w-[50px] py-1.5 text-xs font-semibold'>{item.name}</button>
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