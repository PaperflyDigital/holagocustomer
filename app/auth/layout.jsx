import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/Logo.svg'
import { RiCloseLargeFill   } from 'react-icons/ri'
import Link from 'next/link'
const layout = ({ children }) => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-offWhite'>
            <div className='bg-white rounded-lg w-full max-w-[500px] mx-5 px-6 py-8 flex flex-col items-center'>
                <div className='relative w-full'>
                    <Image src={logo} width={130} className='mx-auto'></Image>
                    <Link href={'/store'} className='bg-offWhite size-10 absolute right-0 -top-3 rounded-full flex items-center justify-center'>
                        <RiCloseLargeFill  size={20}/>
                    </Link>
                </div>
                <div className='w-full mt-5'>
                    {children}

                </div>
            </div>
        </div>
    )
}

export default layout