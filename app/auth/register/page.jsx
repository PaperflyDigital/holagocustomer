import Button from '@/components/global/Button'
import CheckBoxInput from '@/components/global/CheckBoxInput'
import TextInput from '@/components/global/TextInput'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div >
            <p className='text-xl font-semibold text-center'>Create your account</p>
            <div className='w-full mt-5 space-y-3'>
                <TextInput placeholder={'Email Address or Phone Mumber'}></TextInput>
                <TextInput placeholder={'Enter Password'}></TextInput>
                <TextInput placeholder={'Re-Enter Password'}></TextInput>
                <TextInput placeholder={'Full Name'}></TextInput>
                <div className='flex justify-between items-center'>
                    <CheckBoxInput label={'Remember me'} id={'remC'} />
                </div>
                <div className='mt-2 space-y-2'>
                    <Button variant='primary' className={'w-full'}>Sign up</Button>
                </div>
                <div className='flex items-center gap-1 pt-5 justify-center'>
                    Have an account?
                    <Link href={''} className='text-blue font-medium'>Login here</Link>
                </div>
            </div>
        </div>
    )
}

export default page