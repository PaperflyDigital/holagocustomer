'use client'
import Image from 'next/image';
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import catPic from "@/public/images/cuban-cat.png";
import ProductDetails from '@/components/store/product/ProductDetails';
import ProductSize from '@/components/store/product/ProductSize';
import AddToCartSection from '@/components/store/product/AddToCartSection';
import ProductMoreDetails from '@/components/store/product/ProductMoreDetails';
import Reviews from '@/components/store/product/Reviews';
import MoreProducts from '@/components/store/product/MoreProducts';
const page = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' !w-[15%] !rounded-xl"></span>';
    },
  };

  return (
    <div className=' container py-16 relative'>
      <div className='flex w-full gap-10 flex-col lg:flex-row'>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          // navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-auto max-w-[550px] w-full lg:w-2/5 product-image-swiper"
        >
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={catPic} className='object-contain w-full'  alt=''/>
          </SwiperSlide>
        </Swiper>
        <div className='w-full lg:w-3/5 py-5'>
          <ProductDetails />
          <ProductSize />
          <AddToCartSection />
          <ProductMoreDetails />
        </div>
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <MoreProducts />
      </div>
      <div className='h-px mt-5 w-full bg-gradient-to-r from-transparent via-black/50 to-transparent'>

      </div>
    </div>
  )
}

export default page