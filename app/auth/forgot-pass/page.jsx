'use client'
import Button from '@/components/global/Button'
import OtpInput from '@/components/global/OtpInput'
import TextInput from '@/components/global/TextInput'
import Link from 'next/link'
import React, { useState } from 'react'
import resetPassSuccessIcon from '@/public/images/resetPassSuccessIcon.png'
import Image from 'next/image'

const Page = () => {
    const [step, setstep] = useState(3)
    return (
        <div>
            {/* {
                step === 0 ? <>
                    <p className='text-xl text-center font-semibold'>Let’s get you recovered</p>
                    <p className='text-sm font-medium text-center'>Please enter your email address or phone number</p>
                    <TextInput placeholder={'What’s your email address or phone number?'} className={'mt-2'} />
                    <Button className={'w-full mt-3'} onClick={() => setstep(1)}>Continue</Button>
                </> : step === 1 ? <>
                    <p className='text-xl text-center font-semibold'>Let’s verify your identity</p>
                    <p className='text-sm font-medium text-center'>Enter the 4-digit code you received</p>
                    <div className='my-5'>
                        <OtpInput />
                    </div>
                    <Button className={'w-full mt-3'} onClick={() => setstep(2)}>Verify</Button>
                    <div className='flex justify-center'>
                        <button className='underline text-center mt-2'>Resend Code</button>
                    </div>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>
                </> : step === 2 ? <>
                    <p className='text-xl text-center font-semibold'>Enter new password</p>
                    <p className='text-sm font-medium text-center'>Please enter new password for your account</p>
                    <TextInput placeholder={'Password'} className={'mt-2'} />
                    <TextInput placeholder={'Re-type Password'} className={'mt-2'} />
                    <Button className={'w-full mt-3'} onClick={() => setstep(3)}>Continue</Button>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>

                </> : step === 3 && <>

                    <Image width={100} src={resetPassSuccessIcon} className='mx-auto' alt=''></Image>
                    <p className='text-xl text-center font-semibold my-2'>New password Setup Done👍</p>
                    <p className='text-sm font-medium text-center'>Now head back and login to your account</p>
                    <Button className={'w-full mt-3'} onClick={() => setstep(1)}>Back to login</Button>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>
                </>
            } */}
        </div>
    )
}

export default Page