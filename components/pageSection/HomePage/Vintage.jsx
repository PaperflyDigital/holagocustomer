import pan from "@/public/images/pan.png";
import rtk from "@/public/images/rtk.png";
import Image from "next/image";
export default function Vintage() {
  return (
    <section className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 py-20 px-10">
        <div className="grid grid-cols-3 justify-between items-center overflow-hidden">
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={pan}
            alt="earphone"
          />
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={rtk}
            alt="earphone"
          />
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={pan}
            alt="earphone"
          />
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={rtk}
            alt="earphone"
          />
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={pan}
            alt="earphone"
          />
          <Image
            className="hover:scale-105 hover:bg-opacity-90 duration-700"
            src={rtk}
            alt="earphone"
          />
        </div>
        <div className="order-first md:order-last">
          <h2 className="section-title">Vintage Style</h2>
          <p className="section-text">
            Discover the power of timeless style with our mens fashion brand. We
            blend classic elegance with modern sensibility to create clothes
            that make you feel confident and unforgettable, no matter the
            moment.
          </p>
        </div>
      </div>
    </section>
  );
}
