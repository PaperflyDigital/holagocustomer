"use client";
import Image from "next/image";
import catPic from "@/public/images/cuban-cat.png";
import { useRef } from "react";

export default function MoreExplore() {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // scroll-fast
    container.scrollLeft = container.scrollLeft - walk;
  };
  return (
    <section className="container mx-auto">
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center">
          <div>
            <h2 className="section-title">More to</h2>
            <h2 className="section-heading">Explore</h2>
            <p className="section-text">
              Discover curated edits and seasonal collections
            </p>
          </div>
          <div className="md:col-span-2">
            <div
              className="w-full overflow-x-auto hidden_scrollbar"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="flex gap-5">
                <div className="w-[410px] h-[550px] flex-shrink-0 rounded-lg relative group">
                  <Image
                    src={catPic}
                    alt="Picture of the author"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                    <h2 className="section-heading text-center">
                      Cuban Shirts
                    </h2>
                  </div>
                </div>
                <div className="w-[410px] h-[550px] flex-shrink-0 rounded-lg relative group">
                  <Image
                    src={catPic}
                    alt="Picture of the author"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                    <h2 className="section-heading text-center">
                      Cuban Shirts
                    </h2>
                  </div>
                </div>
                <div className="w-[410px] h-[550px] flex-shrink-0 rounded-lg relative group">
                  <Image
                    src={catPic}
                    alt="Picture of the author"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                    <h2 className="section-heading text-center">
                      Cuban Shirts
                    </h2>
                  </div>
                </div>
                <div className="w-[410px] h-[550px] flex-shrink-0 rounded-lg relative group">
                  <Image
                    src={catPic}
                    alt="Picture of the author"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                    <h2 className="section-heading text-center">
                      Cuban Shirts
                    </h2>
                  </div>
                </div>
                <div className="w-[410px] h-[550px] flex-shrink-0 rounded-lg relative group">
                  <Image
                    src={catPic}
                    alt="Picture of the author"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                    <h2 className="section-heading text-center">
                      Cuban Shirts
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
