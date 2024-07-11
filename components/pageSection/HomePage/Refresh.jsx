import refPic from "@/public/images/ref.png";
import Image from "next/image";
export default function Refresh() {
  return (
    <section className="container mx-auto">
      <div className="bg-[#F4F4F4] rounded-md shadow-md my-10 px-10">
        <div className="flex justify-between items-center">
          <div>
            <Image src={refPic} alt="refresh" />
          </div>
          <div>
            <h2 className="section-heading max-w-48 text-center">Refresh Your Wardrobe</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
