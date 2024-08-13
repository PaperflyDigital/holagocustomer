import React from 'react'

const CheckBoxInput = ({ label, id, name, type = 'text', className, placeholder, ...etc }) => {
    return (
        <div>
            <div>
                <div>
                    <div className="flex items-center gap-2">
                        <input
                            placeholder={placeholder}
                            id={id}
                            type={'checkbox'}
                            name={name}
                            spellCheck='false'
                            className={`block w-full custom-checkbox rounded-xl p-2 border-[1.5px] border-gray-200 focus:border-gray-300 focus:outline-none focus:border-[1.5px] focus:ring-0 ${className}`}
                            {...etc}
                        />
                        <label htmlFor={id} className=" text-black">{label}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBoxInput