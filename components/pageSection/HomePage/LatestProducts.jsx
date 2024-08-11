"use client";
import Image from "next/image";
import pci from "@/public/images/cuban-cat.png";
import rarrow from "@/public/images/rarrow.png";
import { useRef } from "react";
import Link from "next/link";

export default function LatestProducts() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };
  return (
    <section className="container mx-auto my-5">
      <div className="">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h2 className="section-title">Latest Products</h2>
          <p className="section-text">Get the best for you!</p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
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
                    src={pci}
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
          <div className="flex md:hidden justify-center">

            <Link href="" className="font-semibold underline">View All Products</Link>
          </div>
          <div className="md:absolute top-5 right-0 hidden ">
            <div className="flex flex-col justify-end">
              <button
                className="btn-primary border-2 border-black p-3 w-10 h-10"
                onClick={slideRight}
              >
                <Image src={rarrow} alt="right arrow" />
              </button>
              <button
                className="btn-primary border-b-2 border-r-2 border-l-2 border-black p-3 w-10 h-10"
                onClick={slideLeft}
              >
                <Image className="rotate-180" src={rarrow} alt="left arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
