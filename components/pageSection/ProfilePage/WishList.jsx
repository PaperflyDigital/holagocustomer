import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import img from '@/public/images/rtk.png'
import { PiHandbag } from 'react-icons/pi'
const WishList = () => {
    return (
        <div>
            <p className='text-xl font-medium'>Wishlist</p>
            <div className='mt-5'>
                <div className='border border-[#EEEEEE] rounded-xl flex gap-3 items-center px-1 sm::px-3 justify-between'>
                    <div className='flex items-center gap-1 sm:gap-3'>
                        <RiDeleteBin6Line size={18}/>
                        <Image src={img} alt='' className='w-[100px] h-[100px] object-cover rounded-xl'></Image>
                        <div className='space-y-1'>
                            <p className=''>Soft Hoddie</p>
                            <p className='text-xs font-bold'>৳ 1450</p>
                            <p className='text-xs'>Size: S</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 bg-[#F6F6F6] text-sm px-3 py-1.5  rounded-full'>
                        <PiHandbag size={20} />
                        <p className='text-sm hidden sm:block'>Added to cart!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList