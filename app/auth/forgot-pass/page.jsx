'use client'
import Button from '@/components/global/Button'
import OtpInput from '@/components/global/OtpInput'
import TextInput from '@/components/global/TextInput'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [step, setstep] = useState(0)
    return (
        <div>
            {
                step === 0 ? <>
                    <p className='text-xl font-medium text-center'>Let’s get you recovered</p>
                    <p className='text-sm font-medium text-center'>Please enter your email address or phone number</p>
                    <TextInput placeholder={'What’s your email address or phone number?'} className={'mt-2'} />
                    <Button className={'w-full mt-3'} onClick={() => setstep(1)}>Continue</Button>
                </> : step === 1 && <>
                    <p className='text-xl font-medium text-center'>Let’s verify your identity</p>
                    <p className='text-sm font-medium text-center'>Enter the 4-digit code you received</p>
                    <div className='my-5'>
                        <OtpInput />
                    </div>
                    <Button className={'w-full mt-3'}>Verify</Button>
                    <div className='flex justify-center'>
                        <button className='underline text-center mt-2'>Resend Code</button>
                    </div>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>
                </>
            }
        </div>
    )
}

export default page