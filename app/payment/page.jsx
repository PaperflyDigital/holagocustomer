'use client'
import NavigationBar from '@/components/global/NavigationBar'
import Cart from '@/components/store/Cart'
import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import img from '@/public/images/rtk.png'
import pathao from '@/public/images/pathao.png'
import sslCommerz from '@/public/images/sslcommerz-logo.png'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import CheckBoxInput from '@/components/global/CheckBoxInput'
import Button from '@/components/global/Button'
import TextInput from '@/components/global/TextInput'
import TextInputWithButton from '@/components/global/TextInputWithButton'

const Page = () => {
    const [open, setopen] = useState(false);

    return (
        <div className='min-h-screen'>
            <NavigationBar cartOpen={setopen} />
            <Cart setOpen={setopen} open={open} />
            <div className='pt-36 container flex flex-col lg:flex-row items-center gap-7 h-full'>
                <div className='w-full lg:w-1/2'>
                    <IoArrowBack size={30} />
                    <p className='text-xl my-2 text-black font-medium'>Shipping Services</p>
                    <div className='border border-[#f6f6f6] rounded-xl'>
                        <div className='flex items-center justify-between bg-[#f6f6f6] p-3 rounded-t-xl'>
                            <div>
                                <p>Address -Junayed office</p>
                                <p>House: 1, road: 2</p>
                            </div>
                            <IoIosArrowForward />
                        </div>
                        <div className='p-3 rounded-b-xl'>
                            <div className='flex items-center justify-between'>
                                <CheckBoxInput label={'Pathao Courier - 1-3 Days'} />
                                <p>৳50</p>
                            </div>
                            <div className='flex gap-4 items-center mt-2'>
                                <Image src={pathao} className='size-12' alt=''></Image>
                                <div>
                                    <p className='font-medium'>Pathao Courier</p>
                                    <p className='text-sm text-[#CCCCCC]'>House: B, Road: 32</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='my-5'>
                        <p className='text-xl font-medium'>Payment Method</p>
                        <div className='rounded-xl border border-[#f6f6f6]  my-3 divide-y-[2px] divide-[#f6f6f6]'>
                            <div className='flex justify-between p-3'>
                                <CheckBoxInput label={'Card'} />
                                <Image src={sslCommerz} alt=''></Image>
                            </div>
                            <div className='flex justify-between p-3'>
                                <CheckBoxInput label={'Card'} />
                                <Image src={sslCommerz} alt=''></Image>
                            </div>
                            <div className='flex justify-between p-3'>
                                <CheckBoxInput label={'Card'} />
                                <Image src={sslCommerz} alt=''></Image>
                            </div>
                            <div className='flex justify-between p-3'>
                                <CheckBoxInput label={'Card'} />
                                <Image src={sslCommerz} alt=''></Image>
                            </div>
                        </div>
                        <Button className={'w-full !rounded-full'}>Pay now</Button>
                    </div>
                </div>
                <div className='bg-[#F6F6F6] rounded-2xl w-full lg:w-1/2 p-5 pb-20'>
                    <p className='text-xl font-medium'>Summary</p>
                    <div className='flex mt-5 gap-3 border items-center border-[#EEEEEE] rounded-xl bg-white'>
                        <div className=''>
                            <Image src={img} className='rounded-s-xl max-w-[167px] max-h-[150px]  object-cover' alt=''></Image>
                        </div>
                        <div className='space-y-2 mt-2  font-medium'>
                            <p className=''>Men’s Polo Shirt (PR0002)</p>
                            <p className=' font-semibold'>৳1,400</p>
                            <p>Size: 1</p>
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div className='space-y-3'>
                        <div className='font-medium flex justify-between'>
                            <p>Subtotal</p>
                            <p>৳1,400</p>
                        </div>
                        <div className='font-medium flex justify-between'>
                            <p>Delivery</p>
                            <p>৳1,400</p>
                        </div>
                        <div className='font-medium flex justify-between'>
                            <p>HOLAGO Club Discount</p>
                            <p>৳1,400</p>
                        </div>
                        <div className='font-medium flex justify-between'>
                            <p>VAT</p>
                            <p>৳1,400</p>
                        </div>
                        <div className='font-semibold flex justify-between'>
                            <p>Total</p>
                            <p>৳1,400</p>
                        </div>
                    </div>
                    <hr className='my-5' />

                    <div className='flex items-end'>
                        <div className='w-full'>
                            <TextInputWithButton buttonClass='px-5 bg-black text-white' rounded='full' buttonText='Apply' label={'Do you have a promotional code?'} placeholder={'Enter code'} className={'rounded-r-none'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page