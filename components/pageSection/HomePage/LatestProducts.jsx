import Image from "next/image";
import pci from "@/public/images/pci.png";
import rarrow from "@/public/images/rarrow.png";

export default function LatestProducts() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="section-title">Latest Products</h2>
        <p className="section-text">Get the best for you!</p>
      </div>

      <div className="grid grid-cols-4 justify-between items-center relative">
        <div className="my-5">
          <div className="">
            <Image className="border rounded-md" src={pci} alt="earphone" />
          </div>
          <div className="secondary-color py-3">
            <h3 className="">Men’s Polo Shirt (PR0003)</h3>
            <p>৳ 1,400</p>
          </div>
        </div>
        <div className="my-5">
          <div className="">
            <Image className="border rounded-md" src={pci} alt="earphone" />
          </div>
          <div className="secondary-color py-3">
            <h3 className="">Men’s Polo Shirt (PR0003)</h3>
            <p>৳ 1,400</p>
          </div>
        </div>
        <div className="my-5">
          <div className="">
            <Image className="border rounded-md" src={pci} alt="earphone" />
          </div>
          <div className="secondary-color py-3">
            <h3 className="">Men’s Polo Shirt (PR0003)</h3>
            <p>৳ 1,400</p>
          </div>
        </div>
        <div className="my-5">
          <div className="">
            <Image className="border rounded-md" src={pci} alt="earphone" />
          </div>
          <div className="secondary-color py-3">
            <h3 className="">Men’s Polo Shirt (PR0003)</h3>
            <p>৳ 1,400</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center absolute top-5 right-0">
          <button className="btn-primary border-2 border-black p-3">
            <Image src={rarrow} alt="arrow" />
          </button>
          <button className="btn-primary border-2 border-black p-3">
            <Image className="rotate-180" src={rarrow} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
