import refPic from "@/public/images/ref.png";
import Image from "next/image";
export default function Refresh() {
  return (
    <section className="container mx-auto">
      <div className="md:bg-[#F4F4F4] rounded-md md:shadow-md mx-10 my-20 px-10 relative">
        <div className="flex justify-between items-center">
          <div className="absolute md:relative bottom-0 right-[40%] md:right-0 w-60 md:w-full">
            <Image className="object-cover" src={refPic} alt="refresh" />
          </div>
          <div className="flex justify-end ml-auto text-center">
            <h2 className="section-heading max-w-40 md:max-w-48">Refresh Your Wardrobe</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
