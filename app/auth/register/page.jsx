"use client"
import Button from '@/components/global/Button'
import CheckBoxInput from '@/components/global/CheckBoxInput'
import OtpInput from '@/components/global/OtpInput'
import TextInput from '@/components/global/TextInput'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


const validateContact = (contact) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const sanitizedContact = contact.replace(/\D/g, '');
    const phoneRegex = /^\d{7,15}$/;
    if (emailRegex.test(contact)) return { type: "email", valid: true };
    else if (phoneRegex.test(sanitizedContact)) return { type: "phone", valid: true, sanitizedContact };
    else return { type: "invalid", valid: false };
};
const page = () => {
    const [step, setStep] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        const { contact, password, rPassword, name } = e.target.elements;
        const data = {
            name: name.value,
            password: "",
            email: "",
            phone: "",
            role: "CUS"
        };
        // const validationResult = validateContact(contact.value);
        // if (validationResult.valid) {
        //     if (validationResult.type === 'email') {
        //         data.email = contact.value;
        //     } else if (validationResult.type === 'phone') {
        //         data.phone = contact.value.replace(/\D/g, '');
        //     }
        // } else {
        //     return toast.error("Invalid email or phone number");
        // }
        // if (password.value !== rPassword.value) {
        //     return toast.error("Passwords don't match");
        // }
        // data.password = password.value;
        // console.log(data);
        setStep(1)
    };
    const handleOtpVerify = (e) => {
        const otp = e.target.otp.value;

    }
    return (
        <div >
            {
                step === 0 ? <div>
                    <p className='text-xl font-semibold text-center'>Create your account</p>
                    <form onSubmit={handleSubmit} className='w-full mt-5 space-y-3'>
                        <TextInput placeholder={'Phone Number'} name={'contact'}></TextInput>
                        {/* <TextInput placeholder={'Enter Password'} name={'password'}></TextInput>
                        <TextInput placeholder={'Re-Enter Password'} name={'rPassword'}></TextInput> */}
                        <TextInput placeholder={'Full Name'} name={'name'}></TextInput>
                        {/* <div className='flex justify-between items-center'>
                            <CheckBoxInput label={'Remember me'} id={'remC'} />
                        </div> */}
                        <div className='mt-2 space-y-2'>
                            <Button variant='primary' className={'w-full'}>Sign up</Button>
                        </div>
                        <div className='flex items-center gap-1 pt-5 justify-center'>
                            Have an account?
                            <Link href={''} className='text-blue font-medium'>Login here</Link>
                        </div>
                    </form>
                </div> : step === 1 && <form onSubmit={handleOtpVerify}>
                    <p className='text-xl text-center font-semibold'>Let’s verify your identity</p>
                    <p className='text-sm font-medium text-center'>Enter the 4-digit code you received</p>
                    <div className='my-5'>
                        <OtpInput name="otp" />
                    </div>
                    <Button className={'w-full mt-3'} >Verify</Button>
                    <div className='flex justify-center'>
                        <button className='underline text-center mt-2'>Resend Code</button>
                    </div>
                    <div className='flex items-center gap-1 pt-5 justify-center'>
                        Still need help?
                        <Link href={''} className='text-blue font-medium'>Contact us</Link>
                    </div>
                </form>
            }

        </div>
    )
}

export default page