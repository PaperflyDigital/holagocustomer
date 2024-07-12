import payment from "@/public/images/paymentmethod.png";
import Image from "next/image";

export default function CopyRight() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-10 py-5">
        <div className="grid grid-cols-2 justify-between items-center ">
          <div>
            <p className="text-md">© 2021 Holago. All Rights Reserved.</p>
          </div>
          <div className="w-full object-cover">
            <Image src={payment} alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
