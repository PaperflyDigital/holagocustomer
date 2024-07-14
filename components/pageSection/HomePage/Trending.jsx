import Image from "next/image";
import trading from "@/public/images/trading.png";

export default function Trading() {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="container mx-auto py-20 px-10">
        <div className="flex justify-between items-center">
          <h2 className="section-title">Trending Outfits</h2>
          <p className="section-text">Shared by customers, just like you!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center mx-auto gap-5 relative w-full my-5">
          <div className="">
            <div className="overflow-hidden rounded-md hover:shadow-lg transition duration-700">
              <Image
                className="border rounded-md hover:shadow-lg hover:scale-105 transition duration-700 w-full"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden rounded-md hover:shadow-lg transition duration-700">
              <Image
                className="border rounded-md hover:shadow-lg hover:scale-105 transition duration-700 w-full"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden rounded-md hover:shadow-lg transition duration-700">
              <Image
                className="border rounded-md hover:shadow-lg hover:scale-105 transition duration-700 w-full"
                src={trading}
                alt="earphone"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="overflow-hidden rounded-md hover:shadow-lg transition duration-700">
              <Image
                className="border rounded-md hover:shadow-lg hover:scale-105 transition duration-700 w-full"
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
