import React from 'react'

const Modal = ({ open, setOpen, children, className }) => {

    return (
        <div>
            {
                open &&
                <>
                    <div className='absolute top-0 left-0 w-full min-h-[calc(100vh-104px)] h-full bg-black opacity-30 blur-2xl'>
                    </div>
                    <div className={` fixed h-screen top-0 left-0 flex z-50 w-full items-center justify-center ${className}`}>
                        <div className='bg-white p-5 rounded-xl w-[450px]'>
                        {children}

                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Modal