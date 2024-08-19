import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import { Swiper, SwiperSlide } from 'swiper/react'
import catPic from "@/public/images/cuban-cat.png";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Reviews = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' !w-[15%] !rounded-xl"></span>';
        },
    };
    return (
        <div className='my-5 flex items-center w-full gap-8 flex-col lg:flex-row'>
            <div className='w-full lg:w-2/5'>
                <p className='text-xl font-medium'>Rating & Reviews</p>
                <div className='flex items-center mt-5 gap-5'>
                    <div>
                        <div className='flex items-end'>
                            <p className='text-5xl font-bold'>4.9</p>
                            <p className='text-[#A5A5A5]'>/5</p>
                        </div>
                        <p className='text-[#A5A5A5]'>(41 New Reviews)</p>
                        <button className=' py-1.5 rounded-md mt-5 border border-[#cccccc] font-semibold px-10 whitespace-nowrap'>Write A Review</button>
                    </div>
                    <div className='space-y-2 w-full'>
                        {/* # */}
                        <div className='flex items-center gap-1.5'>
                            <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            <p>5</p>
                            <div className='w-full h-2 rounded-full bg-[#f5f5f5]'>
                                <div className='w-1/2 h-2 rounded-full bg-black'>

                                </div>
                            </div>
                        </div>
                        {/* # */}
                        <div className='flex items-center gap-1.5'>
                            <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            <p>4</p>
                            <div className='w-full h-2 rounded-full bg-[#f5f5f5]'>
                                <div className='w-1/2 h-2 rounded-full bg-black'>

                                </div>
                            </div>
                        </div>
                        {/* # */}
                        <div className='flex items-center gap-1.5'>
                            <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            <p>3</p>
                            <div className='w-full h-2 rounded-full bg-[#f5f5f5]'>
                                <div className='w-1/2 h-2 rounded-full bg-black'>

                                </div>
                            </div>
                        </div>
                        {/* # */}
                        <div className='flex items-center gap-1.5'>
                            <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            <p>2</p>
                            <div className='w-full h-2 rounded-full bg-[#f5f5f5]'>
                                <div className='w-1/2 h-2 rounded-full bg-black'>

                                </div>
                            </div>
                        </div>
                        {/* # */}
                        <div className='flex items-center gap-1.5'>
                            <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            <p>1</p>
                            <div className='w-full h-2 rounded-full bg-[#f5f5f5]'>
                                <div className='w-1/2 h-2 rounded-full bg-black'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-3/5'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 50000,
                        disableOnInteraction: false,
                    }}
                    pagination={pagination}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="h-auto w-full product-review-swiper"
                >
                    <SwiperSlide className='border p-5 rounded-2xl'>
                        <p className='text-lg font-medium my-1'>Safayat Hussain</p>
                        <div className='flex justify-between'>

                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            </div>
                            <p>13 December, 2024</p>
                        </div>
                        <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat tempora error eum qui earum unde pariatur dignissimos sapiente! Quo, facilis.</p>
                        <Image src={catPic} className='size-16 rounded-lg object-cover' alt=''/>
                    </SwiperSlide>
                    <SwiperSlide className='border p-5 rounded-2xl'>
                        <p className='text-lg font-medium my-1'>Safayat Hussain</p>
                        <div className='flex justify-between'>

                            <div className='flex gap-1'>
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                                <TiStarFullOutline className='text-[#FFB112]' size={22} />
                            </div>
                            <p>13 December, 2024</p>
                        </div>
                        <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat tempora error eum qui earum unde pariatur dignissimos sapiente! Quo, facilis.</p>
                        <Image src={catPic} className='size-16 rounded-lg object-cover' alt=''/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Reviews