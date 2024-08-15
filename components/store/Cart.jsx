import Image from 'next/image'
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import img from '@/public/images/rtk.png'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from '../global/Button'

const Cart = ({ open, setOpen }) => {
    return (
        <div className={`fixed top-0 w-full sm:max-w-[350px] z-[999] bg-white h-screen shadow-2xl ${open ? 'right-0' : '-right-[500px]'} duration-300`}>
            <div className='p-3 flex flex-col justify-between h-full'>
                <div className=''>
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-1'>Cart <span className='size-6 rounded-full bg-[#F6F6F6] flex justify-center items-center'>0</span></p>
                        <IoIosCloseCircleOutline size={24} onClick={() => setOpen(false)} className='cursor-pointer' />
                    </div>
                    <div className='flex mt-5 gap-3 border border-[#EEEEEE] rounded-xl'>
                        <div className='w-2/5'>
                            <Image src={img} className='rounded-s-xl object-cover'></Image>
                        </div>
                        <div className='space-y-2 mt-2 text-sm font-medium'>
                            <p className=''>Men’s Polo Shirt (PR0002)</p>
                            <p className=' font-semibold'>৳1,400</p>
                            <p>Size: 1</p>
                        </div>
                        <div className='flex items-center pr-3' >
                            <RiDeleteBin6Line size={20} />
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='flex justify-between'>
                        <p className='font-medium'>Subtotal</p>
                        <p className='font-semibold'>৳1,400</p>
                    </div>
                    <Button className={'w-full !rounded-full'}>Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart