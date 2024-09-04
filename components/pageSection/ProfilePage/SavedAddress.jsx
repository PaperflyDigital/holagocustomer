'use client'
import Button from '@/components/global/Button'
import React, { useRef, useState } from 'react'
import Address from './Address'
import Modal from '@/components/global/Modal'
import useClickOutside from '@/hooks/useClickOutside'

const SavedAddress = () => {
    const [page, setPage] = useState("add")
    const editAddressValue = {
        name: 'Home',
        phone: '01615513272',
        address: '01615513272',
        area: 'myArea',
    }
    const delModalRef = useRef();
    const [delModalOpen, setdelModalOpen] = useState(false);
    useClickOutside(delModalRef, () => {
        setdelModalOpen(false)
    })
    return (
        <div>
            {
                page === 'add' ?
                    <Address setPage={setPage} title={'Add new Address'} /> :
                    page === 'edit' ? <Address setPage={setPage} title={'Edit address'} value={editAddressValue} /> :
                        page === '' &&
                        <>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>Saved Address</p>
                                <Button variant='outline' rounded='full' className={"font-medium"} size='sm' onClick={() => setPage('add')}>Add new Address</Button>
                            </div>
                            <div className='border rounded-xl border-[#EEEEEE] p-4 mt-3'>
                                <div className='text-sm font-medium'>
                                    <p className='text-lg font-medium'>Home 1</p>
                                    <div className='flex mt-5 gap-20'>
                                        <div>
                                            <p className='text-[#7f7f7f] '>Recipent</p>
                                            <p>Safayat</p>
                                        </div>
                                        <div>
                                            <p className='text-[#7f7f7f] font-medium'>Phone number</p>
                                            <p>01615513272</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-[#7f7f7f] font-medium'>Delivery address</p>
                                        <p>05, falgunu, sylhet</p>
                                    </div>
                                </div>
                                <div className='mt-5 flex gap-4'>
                                    <Button variant='outline' rounded='full' className={"font-medium w-1/3 !border-[#EEEEEE]"} size='sm' onClick={() => setdelModalOpen(true)}>Delete</Button>
                                    <Button variant='outline' rounded='full' className={"font-medium w-1/3 !border-[#EEEEEE]"} size='sm' onClick={() => setPage('edit')}>Edit</Button>
                                    <Button variant='outline' rounded='full' className={"font-medium w-1/3 !border-[#EEEEEE] bg-black text-white"} disabled={true} size='sm'>Set default</Button>

                                </div>
                            </div>
                        </>
            }
            <Modal open={delModalOpen}>
                <div ref={delModalRef} >
                    <p>Are you sure to delete this address?</p>
                    <div className='flex gap-3 mt-4'>
                        <Button className={'w-1/2'} onClick={() => setdelModalOpen(false)}>Cancel</Button>
                        <Button className={'w-1/2'}>Delete</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SavedAddress