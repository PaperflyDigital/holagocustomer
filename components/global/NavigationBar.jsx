"use client";
import logo from "@/public/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBars,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="hidden md:flex justify-between items-center py-4 px-10">
          <div className="flex items-center">
            <Image src={logo} width={150} height={150} alt="Logo" />
          </div>
          <div className="flex items-center justify-between text-sm font-semibold">
            <ul className="">
              <li>
                <Link href="/"> Man </Link>
              </li>
            </ul>
            <ul className="flex justify-between items-center gap-2 mx-5">
              <li>
                <Link href="/"> T-Shirts </Link>
              </li>
              <li>
                <Link
                  className="bg-black text-white px-2 rounded-full"
                  href="/"
                >
                  just dropped
                </Link>
              </li>
            </ul>
            <ul className="flex justify-between items-center gap-2 mx-5">
              <li>
                <Link href="/"> Cuban Shirt </Link>
              </li>
              <li>
                <Link
                  className="bg-red-500 text-white px-2 rounded-full"
                  href="/"
                >
                  {" "}
                 best selling
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center gap-2">
              <Link href="/">
                <div className="p-2 border border-gray-800 rounded-full">
                  <FaSearch className="w-4 h-4 text-gray-800" />
                </div>
              </Link>

              <Link href="/">
                <div className="p-2 border border-gray-800 rounded-full">
                  <FaUser className="w-4 h-4 text-gray-800" />
                </div>
              </Link>

              <Link href="/">
                <div className="p-2 border border-gray-800 rounded-full relative">
                  <FaHeart className="w-4 h-4 text-gray-800" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </div>
                </div>
              </Link>

              <Link href="/">
                <div className="p-2 border border-gray-800 rounded-full relative">
                  <FaShoppingCart className="w-4 h-4 text-gray-800" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-between items-center px-5 py-2">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="p-2">
              <FaBars className="w-4 h-4 text-gray-800" />
            </button>
          </div>
          <div className="flex items-center ">
            <Image src={logo} width={100} height={100} alt="Logo" />
          </div>

          <div className="flex items-center order-3">
            <Link href="/">
              <div className="p-2 border border-gray-800 rounded-full">
                <FaSearch className="w-2 h-2 text-gray-800" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li>
              <Link href="/">Man</Link>
            </li>
            <li>
              <Link href="/">T-Shirts</Link>
            </li>
            <li>
              <Link className="bg-black text-white px-2 rounded-full" href="/">
                JUST DROPPED
              </Link>
            </li>
            <li>
              <Link href="/">Cuban Shirt</Link>
            </li>
            <li>
              <Link
                className="bg-red-500 text-white px-2 rounded-full"
                href="/"
              >
                BEST SELLING
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
