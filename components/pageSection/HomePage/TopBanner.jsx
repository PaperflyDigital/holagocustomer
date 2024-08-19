import Image from "next/image";
import banner from "@/public/images/home_banner.png";

export default function TopBanner() {
  return (
    <section className="">
      <Image
        src={banner}
        alt="Picture of the author"
        layout="responsive"
        width={1920}
        height={1080}
        className="object-cover w-full h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96"
      />

      <div className="container"></div>
    </section>
  );
}
