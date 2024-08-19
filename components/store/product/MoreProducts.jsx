import Image from 'next/image'
import React from 'react'
import catPic from "@/public/images/cuban-cat.png";

const MoreProducts = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='my-5'>
            <p className='text-2xl'>You May Also Like</p>
            <div className='mt-5'>

                <div
                    // ref={sliderRef}
                    className="md:flex grid grid-cols-2 gap-3 my-5  md:overflow-x-scroll hidden_scrollbar"
                >
                    {[...Array(15)].map((_, index) => (
                        <div
                            key={index}
                            className=""
                        >
                            <div className="">
                                <Image
                                    className="border rounded-md md:min-w-[200px] xl:min-w-[300px]"
                                    src={catPic}
                                    alt="earphone"
                                />
                            </div>
                            <div className="secondary-color py-3">
                                <h3 className="">Men’s Polo Shirt (PR0003)</h3>
                                <p>৳ 1,400</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreProducts