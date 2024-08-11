"use client";
import Image from "next/image";
import catPic from "@/public/images/cuban-cat.png";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MoreExplore() {
  const [renderCarousel, setrenderCarousel] = useState(false)
  const images = [
    {
      img: catPic,
      title: 'Tshirt'
    },
    {
      img: catPic,
      title: 'Tshirt'
    },
    {
      img: catPic,
      title: 'Tshirt'
    },
    {
      img: catPic,
      title: 'Tshirt'
    },
    {
      img: catPic,
      title: 'Tshirt'
    },
    {
      img: catPic,
      title: 'Tshirt'
    },
  ]
//   setTimeout(() => {
// setrenderCarousel(true)
//   }, 1000);
  return (
    <section className=" mx-auto container">
      <div className="py-20 ">
        <div className="flex flex-col md:flex-row gap-20 justify-between items-center  overflow-hidden">
          <div className="text-center md:text-left">
            <h2 className="section-title">More To</h2>
            <h2 className="text-6xl">Explore</h2>
            <p className="mt-5 max-w-[200px]">
              Discover curated edits and seasonal collections
            </p>
          </div>
          <div 
          // className={`${renderCarousel ? 'opacity-100': 'opacity-0'}`}
          >

          <div className="w-[350px] sm:w-[450px] md:w-[410px] lg:w-[650px] xl:w-[900px] ">
            
            <Swiper
              breakpoints={{

                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}

              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}

              navigation={true}
              modules={[Autoplay, Navigation]}
              className="h-auto w-full"
            >
              {
                images.map((image, i) => <div key={i}>
                  <SwiperSlide className=" ">
                    <div className="relative">
                      <Image
                        src={catPic}
                        alt="Picture of the author"
                        className="rounded-lg h-full object-cover"
                      />
                      <div className="black_bg_gradiant_d_to_u absolute w-full bottom-0 rounded-b-lg ">

                        <h2 className="text-3xl sm:text-2xl 2xl:text-3xl text-white text-center pt-10 pb-5">
                          Cuban Shirts
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>)
              }


            </Swiper>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
