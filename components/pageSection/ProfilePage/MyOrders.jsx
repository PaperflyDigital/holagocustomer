import React, { useState } from 'react'
import { PiHandbag } from 'react-icons/pi'
import { HiOutlineTruck } from 'react-icons/hi'
import { RiMapPin2Line } from 'react-icons/ri'
import img from '@/public/images/rtk.png'
import Image from 'next/image'

const MyOrders = () => {
    const [ordersType, setOrdersType] = useState(0)
    const ordersTypesNavigations = [
        {
            name: 'Processing',
        },
        {
            name: 'Complete',
        },
        {
            name: 'Canceled',
        },
    ]
    return (
        <div>
            <p className='text-xl font-medium'>My Orders</p>
            <div className='flex gap-2 p-2 border border-[#EEEEEE] rounded-xl mt-3'>
                {
                    ordersTypesNavigations.map((item, index) =>

                        <button key={index} onClick={() => setOrdersType(index)} className={`rounded-lg font-medium  py-1.5 flex items-center gap-1 w-full justify-center duration-300 ${ordersType === index ? 'bg-[#F6F6F6]' : 'bg-white text-[#A5A5A5]'}`}>
                            <p>{item.name}</p>
                            <p className={`text-xs bg-black rounded-full px-1 duration-300  ${ordersType === index ? 'bg-black text-white' : 'bg-white text-[#A5A5A5]'}`}>3</p>
                        </button>
                    )
                }
            </div>
            <div>
                <div className='border border-[#EEEEEE] p-3 rounded-xl mt-4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <PiHandbag size={20} />
                            <p className='font-medium'>HLG-123</p>
                        </div>
                        <div className='flex items-center gap-1 bg-orange-600 bg-opacity-20 w-max p-1 px-2 text-xs rounded-full'>
                            <div className='size-2 rounded-full bg-orange-600'>

                            </div>
                            In Transit
                        </div>

                    </div>
                    <div className='flex justify-between items-center mt-4 flex-wrap gap-2'>
                        <div className='flex items-center gap-2 px-2 py-1 rounded-full border border-[#EEEEEE]'>
                            <HiOutlineTruck size={20} className='' />
                            <p>HOLAGO HQ</p>
                        </div>
                        <div>
                            <svg width="80" height="6" viewBox="0 0 80 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5L4.925 3.5L4.925 2.5L3 2.5L3 3.5ZM8.775 3.5L12.625 3.5L12.625 2.5L8.775 2.5L8.775 3.5ZM16.475 3.5L20.325 3.5L20.325 2.5L16.475 2.5L16.475 3.5ZM24.175 3.5L28.025 3.5L28.025 2.5L24.175 2.5L24.175 3.5ZM31.875 3.5L35.725 3.5L35.725 2.5L31.875 2.5L31.875 3.5ZM39.575 3.5L43.425 3.5L43.425 2.5L39.575 2.5L39.575 3.5ZM47.275 3.5L51.125 3.5L51.125 2.5L47.275 2.5L47.275 3.5ZM54.975 3.5L58.825 3.5L58.825 2.5L54.975 2.5L54.975 3.5ZM62.675 3.50001L66.525 3.50001L66.525 2.50001L62.675 2.50001L62.675 3.50001ZM70.375 3.50001L74.225 3.50001L74.225 2.50001L70.375 2.50001L70.375 3.50001ZM78.075 3.50001L80 3.50001L80 2.50001L78.075 2.50001L78.075 3.50001Z" fill="#121212" />
                            </svg>
                        </div>
                        <div className='flex items-center gap-2 px-2 py-1 rounded-full border border-[#EEEEEE]'>
                            Estimated arrival: 28 May 2024
                        </div>
                        <div>
                            <svg width="77" height="6" viewBox="0 0 77 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M77 3.00001L72 0.113255L72 5.88676L77 3.00001ZM-4.37114e-08 3.5L1.925 3.5L1.925 2.5L4.37114e-08 2.5L-4.37114e-08 3.5ZM5.775 3.5L9.625 3.5L9.625 2.5L5.775 2.5L5.775 3.5ZM13.475 3.5L17.325 3.5L17.325 2.5L13.475 2.5L13.475 3.5ZM21.175 3.5L25.025 3.5L25.025 2.5L21.175 2.5L21.175 3.5ZM28.875 3.5L32.725 3.5L32.725 2.5L28.875 2.5L28.875 3.5ZM36.575 3.5L40.425 3.5L40.425 2.5L36.575 2.5L36.575 3.5ZM44.275 3.5L48.125 3.5L48.125 2.5L44.275 2.5L44.275 3.5ZM51.975 3.5L55.825 3.5L55.825 2.5L51.975 2.5L51.975 3.5ZM59.675 3.50001L63.525 3.50001L63.525 2.50001L59.675 2.50001L59.675 3.50001ZM67.375 3.50001L71.225 3.50001L71.225 2.50001L67.375 2.50001L67.375 3.50001Z" fill="#121212" />
                            </svg>

                        </div>
                        <div className='flex items-center gap-2 px-2 py-1 rounded-full border border-[#EEEEEE]'>
                            <RiMapPin2Line size={20} className='' />
                            <p>Junayed’s House, BD</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex mt-3 gap-3 border border-[#EEEEEE] rounded-xl'>
                            <div className='size-[120px] object-cover'>
                                <Image src={img} className='rounded-s-xl object-cover' alt=''></Image>
                            </div>
                            <div className='space-y-2 mt-2 text-sm font-medium'>
                                <p className=''>Men’s Polo Shirt (PR0002)</p>
                                <p className=' font-semibold'>৳1,400</p>
                                <p>Size: 1</p>
                            </div>
                        </div>
                        <div className='flex mt-3 gap-3 border border-[#EEEEEE] rounded-xl'>
                            <div className='size-[120px] object-cover'>
                                <Image src={img} className='rounded-s-xl object-cover' alt=''></Image>
                            </div>
                            <div className='space-y-2 mt-2 text-sm font-medium'>
                                <p className=''>Men’s Polo Shirt (PR0002)</p>
                                <p className=' font-semibold'>৳1,400</p>
                                <p>Size: 1</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between border-t border-[#EEEEEE] mt-3 pt-3 items-center'>
                        <p>Total: <span>1400</span></p>
                        <button className='px-3 py-1 rounded-full bg-[#F6F6F6]'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders