import Button from '@/components/global/Button'
import CheckBoxInput from '@/components/global/CheckBoxInput'
import TextInput from '@/components/global/TextInput'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div >
            <p className='text-xl font-semibold text-center'>Login to your account</p>
            <div className='w-full mt-5 space-y-3'>
                <TextInput placeholder={'Phone Mumber'}></TextInput>
                {/* <TextInput placeholder={'Enter Password'}></TextInput> */}
                {/* <div className='flex justify-between items-center'>
                    <CheckBoxInput label={'Remember me'} id={'remC'} />
                    <Link href={''} className='underline text-sm font-medium'>Forgot Password?</Link>
                </div> */}
                <div className='mt-2 space-y-2'>
                    <Button variant='primary' className={'w-full'}>Login</Button>
                    {/* <Button variant='primary' className={'w-full'}>Login with OTP</Button> */}
                </div>
                <div className='flex items-center gap-1 pt-5 justify-center'>
                    Don’t have an account?
                    <Link href={'/auth/register'} className='text-blue font-medium'>Sign up here</Link>
                </div>
            </div>
        </div>
    )
}

export default page