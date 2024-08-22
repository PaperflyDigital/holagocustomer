import React from 'react'

const PhoneInput = ({ label, id, name, type = 'text', className, placeholder, rounded='xl', ...etc }) => {
    return (
        <div>
            <div>
                <label htmlFor={id} className="block text-gray-800 font-medium text-sm">{label}</label>
                <div className="mt-0.5 flex items-center">
                    <div className={`border border-r-0 rounded-l-full rounded-l-${rounded}  p-[8px]`}>

                        <select name="" id="" className='text-sm focus:outline-none bg-[#F6F6F6] rounded-full'>
                            <option value="+88">BD</option>
                            <option value="+88">Ind</option>
                            <option value="+88">BD</option>
                        </select>
                    </div>
                    <input
                        placeholder={placeholder}
                        id={id}
                        type={type}
                        name={name}
                        spellCheck='false'
                        className={`block w-full bg-white placeholder:text-sm md:placeholder:text-base rounded-${rounded} p-2 border-[1.5px] border-l-0 rounded-l-none border-gray-200 focus:border-gray-300 focus:outline-none focus:border-[1.5px] focus:ring-0 ${className}`}
                        {...etc}
                    />
                </div>
            </div>
        </div>
    )
}

export default PhoneInput