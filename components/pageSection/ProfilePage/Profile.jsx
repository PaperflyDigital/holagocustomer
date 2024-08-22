'use client'
import Button from '@/components/global/Button';
import OtpInput from '@/components/global/OtpInput';
import PhoneInput from '@/components/global/PhoneInput';
import TextInput from '@/components/global/TextInput';
import TextInputWithButton from '@/components/global/TextInputWithButton';
import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5';

const Profile = () => {
    const [showConfirmPage, setShowConfirmPage] = useState(false);
    return (
        <div className='border border-[#EEEEEE] rounded-xl  p-4'>
            {
                !showConfirmPage ?
                    <div>

                        <p className='text-xl font-medium'>Profile</p>
                        <p className='text-xs text-[#7f7f7f]'>Place to edit your information.</p>
                        <div className='py-3 space-y-2'>
                            <TextInput label={'Your name'} rounded='full'></TextInput>
                            <div className='flex w-full gap-3 '>
                                <div className='w-1/2'>

                                    <TextInputWithButton buttonText='Change' label={'Email'} rounded='full' />
                                </div>
                                <div className='w-1/2'>
                                    <PhoneInput label={'Phone number'} rounded='full' />
                                </div>

                            </div>
                            <TextInput label={'Date of birth'} rounded='full' type='date'></TextInput>
                            <div className='pt-3'>
                                <Button className={'w-full !rounded-full '} onClick={() => setShowConfirmPage(true)}>Save</Button>
                            </div>
                        </div>

                    </div> :
                    <div>
                        <IoArrowBack size={30} onClick={() => setShowConfirmPage(false)} className='cursor-pointer'/>
                        <p className='text-xl font-medium mt-3'>Confirm Changes</p>
                        <p className='text-xs text-[#7f7f7f] mb-5'>We’ve sent your verification code to +880 1682 024427, please check the message.</p>
                        <OtpInput className='box-input-otp' />
                        <p className='text-center text-sm mt-2'>02:54</p>
                        <div className='flex justify-center mb-2'>

                        <button className='text-center text-sm mt-2 mx-auto'>Resend Code</button>
                        </div>
                        <Button className={'w-full !rounded-full '} onClick={() => setShowConfirmPage(false)}>Confirm</Button>

                    </div>
            }

        </div>
    )
}

export default Profile