import Image from "next/image";
import trading from "@/public/images/trading.png";

export default function Trading() {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="container mx-auto py-20">
        <div className="flex justify-between items-center">
          <h2 className="section-title">Trending Outfits</h2>
          <p className="section-text">Shared by customers, just like you!</p>
        </div>
        <div className="grid grid-cols-4 justify-between items-center gap-5 relative">
          <div className="my-5">
            <div className="">
              <Image
                className="border rounded-md"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="">
              <Image
                className="border rounded-md"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="">
              <Image
                className="border rounded-md"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="">
              <Image
                className="border rounded-md"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
         
        </div>{" "}
      </div>
    </section>
  );
}
