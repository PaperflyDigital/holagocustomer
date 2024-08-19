import logo from "@/public/images/Logo.svg";
import Image from "next/image";
import fbLogo from "@/public/icons/Facebook.png";
import instaLogo from "@/public/icons/Instagram.png";
import tiktokLogo from "@/public/icons/Tiktok.png";
import warray from "@/public/icons/whitearrayright.png";
import Link from "next/link";
export default function NavigationFooter() {
  return (
    <section className="container mx-auto my-10">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <div className="flex items-center mb-5">
            <Image src={logo} width={150} height={150} alt="Logo" />
          </div>
          <div>
            <span className="font-semibold">Trade License :</span> 186045
          </div>
          <div>
            <span className="font-semibold">Email :</span> info@holago.com.bd
          </div>
          <div>
            <span className="font-semibold">Shop Address :</span> Shop 463, 3rd
            Floor, Police Plaza Concord, Dhaka 1212
          </div>
          <div className="flex justify-start items-center my-5  space-x-5">
            <span className="font-semibold">Social</span>
            <div className="flex space-x-4">
              <Image
                className="w-10 h-10"
                src={instaLogo}
                width={150}
                height={150}
                alt="Logo"
              />
              <Image
                className="w-10 h-10"
                src={tiktokLogo}
                width={150}
                height={150}
                alt="Logo"
              />
              <Image
                className="w-10 h-10"
                src={fbLogo}
                width={150}
                height={150}
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <div className="flex flex-col">
            <Link href="#">Need Help? </Link>
            <Link href="#">Order Tracking </Link>
            <Link href="#">Live Chat</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <div className="flex flex-col">
            <Link href="#">About HOLAGO</Link>
            <Link href="#">Store Locator</Link>
            <Link href="#">HOLAGO Club </Link>
            <Link href="#">Refund & Returns</Link>
            <Link href="#">Terms of Services</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Join Our Newsletter!</h3>
          <p className="mb-5">
            Subscribe to our newsletter and get regular style & discount
            updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Type your email address"
              className="w-full p-2 rounded-l-lg focus:outline-none border bg-white"
            />
            <button className="bg-black text-white p-2 rounded-r-lg ">
              <Image src={warray} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
