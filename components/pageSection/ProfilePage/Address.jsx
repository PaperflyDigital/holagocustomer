import Button from '@/components/global/Button'
import PhoneInput from '@/components/global/PhoneInput'
import TextInput from '@/components/global/TextInput'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'

const AddNewAddress = ({setPage, value, title}) => {
    return (
        <div>
            <IoArrowBack size={30} onClick={() => setPage("")} className='cursor-pointer' />

            <p className='text-xl font-medium'>{title}</p>
            <p className='text-sm text-[#7f7f7f]'>Please input your new address</p>
            <p className='font-medium mt-4 text-[18px]'>Shipping address</p>
            <div className='space-y-2 mt-5'>
                <TextInput label={'Address name'} rounded='full' value={value?.name || ''}/>
                <PhoneInput label={'Phone number'} rounded='full' value={value?.phone || ''}/>
                <TextInput label={'Address'} rounded='full' value={value?.address || ''}/>
                <TextInput label={'Area'} rounded='full' value={value?.area || ''}/>
                <Button className="w-full" rounded='full'>Save</Button>
            </div>
        </div>
    )
}

export default AddNewAddress