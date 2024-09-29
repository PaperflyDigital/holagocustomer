'use client'
import Button from '@/components/global/Button';
import NavigationBar from '@/components/global/NavigationBar'
import TextInput from '@/components/global/TextInput';
import Cart from '@/components/store/Cart';
import Image from 'next/image';
import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5';
import img from '@/public/images/rtk.png'
import eliteImg from '@/public/images/ELITE_1.png'
import { RiDeleteBin6Line } from 'react-icons/ri';
import TextInputWithButton from '@/components/global/TextInputWithButton';

const Page = () => {
    const [open, setopen] = useState(false);

    return (
        <div className='min-h-screen'>
            <NavigationBar cartOpen={setopen} />
            <Cart setOpen={setopen} open={open} />
            <div className='pt-36 container flex items-center gap-7 h-full flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 '>
                    <IoArrowBack size={30} />
                    <p className='text-xl my-2 text-black font-medium'>Contact Info</p>
                    <TextInput label={'Email'} rounded='full' />
                    <p className='text-xl mt-8  text-black font-medium'>Shipping Address</p>
                    <div className='space-y-2 mt-3 mb-5'>
                        <TextInput label={'Your Name'} rounded='full' />
                        <TextInput label={'Phone number'} rounded='full' />
                        <TextInput label={'Address'} rounded='full' />
                        <TextInput label={'Area'} rounded='full' />
                    </div>
                    <Button className={'w-full !rounded-full '}>Proceed to payment</Button>
                </div>
                <div className='bg-[#F6F6F6] rounded-2xl w-full lg:w-1/2  p-5 pb-20'>
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
                    <div className='flex justify-between font-medium'>
                        <p>Subtotal</p>
                        <p>৳1,400</p>
                    </div>
                    <hr className='my-5' />
                    {/* <TextInput label={'Do you have a promotional code?'} placeholder={'Enter code'} className={'rounded-r-none'} /> */}
                    <TextInputWithButton buttonText='Apply' rounded='full' buttonClass='bg-black text-white px-5' label={'Do you have a promotional code?'} placeholder={'Enter code'} className={'rounded-r-none'} />
                    <hr className='my-5' />
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <Image className='size-16' src={eliteImg} alt=''></Image>
                            <p>You have 50,000 club points worth ৳5,000!</p>
                        </div>

                        <TextInputWithButton buttonText='Redeem' rounded='full' buttonClass='bg-black text-white px-5' placeholder={'Enter points amount'}  className={'rounded-r-none'} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page