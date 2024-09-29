"use client"
import Button from '@/components/global/Button'
import CheckBoxInput from '@/components/global/CheckBoxInput'
import OtpInput from '@/components/global/OtpInput'
import PhoneInput from '@/components/global/PhoneInput'
import TextInput from '@/components/global/TextInput'
import { FetchApi } from '@/utils/FetchApi'
import { useAuth } from '@/utils/functions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const validateContact = (contact) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const sanitizedContact = contact.replace(/\D/g, '');
    const phoneRegex = /^\d{7,15}$/;
    if (emailRegex.test(contact)) return { type: "email", valid: true };
    else if (phoneRegex.test(sanitizedContact)) return { type: "phone", valid: true, sanitizedContact };
    else return { type: "invalid", valid: false };
};
const Page = () => {
    const [step, setStep] = useState(0)
    const [phone, setPhone] = useState(null)
    const [otp, setOtp] = useState('')
    const router = useRouter()
    const {setAuth, auth} = useAuth();
    useEffect(() => {
        if (auth.id) {
            router.push('/store')
        }
    }, [])
    const handleSubmit = async () => {
        const payload = {
            role: 'customer',
            phone_number: phone
        };
        if (!phone) {
            return toast.error('Phone number is reqiured')
        }
        const { data } = await FetchApi({ url: 'auth/api/register-phone/', method: 'post', body: payload, isToast: true })
        if (data.id) {
            setPhone(phone)
            setStep(1)
        }
    };
    const handleOtpVerify = async () => {
        const payload = {
            phone_number: phone,
            otp: otp
        }
        const { data } = await FetchApi({ url: 'auth/api/verify-otp/', method: 'post', body: payload, isToast: true })
        setAuth(data.user)
        if (data.user) {
            router.push('/store')
        }
    }
    const handleResendCode = async() => {
        await FetchApi({ url: 'auth/api/resendOtp/', method: 'post', body: {phone_number: phone}, isToast: true })

    }
    return (
        <div >
            {
                step === 0 ? <div>
                    <p className='text-xl font-semibold text-center'>Create your account</p>
                    <div className='w-full mt-5 space-y-3'>
                        <PhoneInput
                            placeholder='Phone Number'
                            onChange={(combinedValue) => setPhone(combinedValue)}
                            value={phone}
                        />
                        {/* <TextInput placeholder={'Enter Password'} name={'password'}></TextInput>
                        <TextInput placeholder={'Re-Enter Password'} name={'rPassword'}></TextInput> */}
                        {/* <TextInput placeholder={'Full Name'} name={'name'}></TextInput> */}
                        {/* <div className='flex justify-between items-center'>
                            <CheckBoxInput label={'Remember me'} id={'remC'} />
                        </div> */}
                        <div className='mt-2 space-y-2'>
                            <Button variant='primary' className={'w-full'} onClick={handleSubmit}>Sign up</Button>
                        </div>
                        <div className='flex items-center gap-1 pt-5 justify-center'>
                            Have an account?
                            <Link href={'/auth/login'} className='text-blue font-medium'>Login here</Link>
                        </div>
                    </div>
                </div> : step === 1 && <div>
                    <p className='text-xl text-center font-semibold'>Let’s verify your identity</p>
                    <p className='text-sm font-medium text-center'>Enter the 4-digit code you received</p>
                    <div className='my-5'>
                        <OtpInput name="otp" setOtp={setOtp} otp={otp} />
                    </div>
                    <Button className={'w-full mt-3'} onClick={handleOtpVerify}>Verify</Button>
                    <div className='flex justify-center'>
                        <button className='underline text-center mt-2' onClick={handleResendCode}>Resend Code</button>
                    </div>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>
                </div>
            }

        </div>
    )
}

export default Page