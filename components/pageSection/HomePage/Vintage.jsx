import pan from "@/public/images/pan.png";
import Image from "next/image";
export default function Vintage() {
  return (
    <section className="container mx-auto ">
      <div className="grid grid-cols-2 justify-between items-center gap-10 py-20">
        <div className="grid grid-cols-3 justify-between items-center">
          <Image src={pan} alt="earphone" />
          <Image src={pan} alt="earphone" />
          <Image src={pan} alt="earphone" />
          <Image src={pan} alt="earphone" />
          <Image src={pan} alt="earphone" />
          <Image src={pan} alt="earphone" />
        </div>
        <div>
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
