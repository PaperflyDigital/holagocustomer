"use client";
import logo from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiHome3Line, RiHome6Line, RiShoppingBag3Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { PiUserCircleLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { useAuth, useCart, useScreenWidth } from "@/utils/functions";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";

export default function NavigationBar({ cartOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const productsQuery = useSearchParams().get("products");
  const { auth } = useAuth();
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const routes = [
    { name: "Man", url: "/", status: "", statusColor: "" },
    {
      name: "T-Shirts",
      url: "/",
      status: "Just Dropped",
      statusColor: "bg-black",
    },
    {
      name: "Cuban Shirts",
      url: "/",
      status: "Best Selling",
      statusColor: "bg-error",
    },
  ];
  const NavbarLink = ({ route }) => {
    const [hover, setHover] = useState(false);
    const [renderedText, setRenderedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      if (hover && currentIndex < route.status.length) {
        const timeout = setTimeout(() => {
          setRenderedText((prev) => prev + route.status[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 10);
        return () => clearTimeout(timeout);
      }
      // Reset text when not hovered
      if (!hover) {
        setRenderedText("");
        setCurrentIndex(0);
      }
    }, [currentIndex, route.status, hover]);

    return (
      <Link
        href={route.url}
        className="flex items-center gap-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p>{route.name}</p>
        {route.status && (
          <div
            className={`rounded-full ${route.statusColor} ${
              !hover && "size-3"
            }`}
          >
            <p
              className={`text-white text-[11px] px-2 ${
                hover ? "block" : "hidden"
              } duration-300`}
            >
              {renderedText.split("").map((letter, i) => (
                <span key={i} className="animate-rendering">
                  {letter}
                </span>
              ))}
            </p>
          </div>
        )}
      </Link>
    );
  };
  const searchInputdivRef = useRef();
  const searchInputRef = useRef();
const {products: cartItems} = useCart()
  useClickOutside(searchInputdivRef, () => {
    setSearchBarOpen(false);
  });
  useEffect(() => {
    if (searchBarOpen) {
      searchInputRef.current.focus();
    }
  }, [searchBarOpen]);
  return (
    <div>
      <div className="h-[48px] md:h-[60px] bg-[#EBEEEE] fixed top-0 left-0 w-full  z-50">
        <nav className="  transition-colors duration-300 ">
          <div className="container">
            <div className="hidden md:flex justify-between items-center py-4 ">
              <Link href="/store" className="flex items-center cursor-pointer">
                <Image src={logo} width={150} height={150} alt="Logo" />
              </Link>
              <div>
                <div className="flex items-center gap-5">
                  {routes.map((route, i) => (
                    <NavbarLink route={route} key={i} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 relative">
                {searchBarOpen && (
                  <div className="absolute right-0 h-screen w-screen top-0">
                    <div ref={searchInputdivRef}>
                      <input
                        ref={searchInputRef}
                        type="text"
                        name="search"
                        defaultValue={productsQuery}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            router.push(
                              `/store/products?products=${searchInputRef?.current?.value}`
                            );
                          }
                        }}
                        className={`rounded-full absolute bg-white z-[32143] right-36 focus:outline-none top-0 ${
                          searchBarOpen ? "w-64 px-2.5 py-1" : "w-0 p-0"
                        } duration-900`}
                      />
                      <Button
                        onClick={() => {
                          router.push(
                            `/store/products?products=${searchInputRef?.current?.value}`
                          );
                        }}
                        size="sm"
                        rounded="full"
                        className={` absolute z-[32143] right-36 focus:outline-none top-0`}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center gap-3">
                  <button
                    onClick={() => {
                      setSearchBarOpen(true);
                    }}
                  >
                    <IoSearchOutline size={24} />
                  </button>
                  <Link href={auth?.id ? "/profile" : "/auth/login"}>
                    <PiUserCircleLight size={28} />
                  </Link>
                  <Link href="/profile?screen=1">
                    <div className="relative">
                      <LuHeart size={23} />
                      <div className="bg-black text-white flex items-center justify-center rounded-full leading-none size-3.5 text-[10px] absolute -top-1 -right-1">
                        0
                      </div>
                    </div>
                  </Link>
                  <button href="/" onClick={() => cartOpen(true)}>
                    <div className="relative">
                      <RiShoppingBag3Line size={24} />
                      <div className="bg-black text-white flex items-center justify-center rounded-full leading-none size-3.5 text-[10px] absolute -top-1 -right-1">
                        {cartItems.length}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden justify-between items-center h-full py-2.5">
              <div className="flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
                  <FaBars className="w-4 h-4 text-gray-800" />
                </button>
              </div>
              <div className="flex items-center">
                <Image src={logo} width={100} height={100} alt="Logo" />
              </div>
              <div className="flex items-center order-3">
                {searchBarOpen && screenWidth <= 768 && (
                  <div className="absolute right-0 h-screen w-screen top-0">
                    <div ref={searchInputdivRef}>
                      <input
                        ref={searchInputRef}
                        type="text"
                        name="search"
                        defaultValue={productsQuery}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            router.push(
                              `/store/products?products=${searchInputRef?.current?.value}`
                            );
                          }
                        }}
                        className={`rounded-full absolute bg-white z-[32143] right-5 focus:outline-none top-12 border ${
                          searchBarOpen ? "w-64 px-2.5 py-1" : "w-0 p-0"
                        } duration-900`}
                      />
                      <Button
                        onClick={() => {
                          router.push(
                            `/store/products?products=${searchInputRef?.current?.value}`
                          );
                          setSearchBarOpen;
                        }}
                        size="sm"
                        rounded="full"
                        className={` absolute z-[32143] right-5 focus:outline-none top-12 !py-[7px]`}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    setSearchBarOpen(true);
                  }}
                >
                  <div className="p-2 border border-gray-800 rounded-full">
                    <FaSearch className="w-2 h-2 text-gray-800" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#EBEEEE] ${
              isMenuOpen ? "mt-0" : "-mt-44"
            } duration-300`}
          >
            <div className="flex flex-col gap-2 p-5">
              {routes.map((route, i) => (
                <Link href={"/"} key={i} className="flex items-center gap-2">
                  <p>{route.name}</p>
                  <span
                    className={`${route.statusColor} text-white text-[10px] rounded-full px-2`}
                  >
                    {route.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className=" p-3  w-full fixed bottom-0 z-50">
        <div className="flex justify-between items-center gap-3 bg-[rgba(236,239,239,0.8)] shadow-md backdrop-blur-sm md:hidden  p-4 rounded-full ">
          <Link href="/store">
            <RiHome6Line size={24} />
          </Link>
          <Link href="/profile?screen=0">
            <PiUserCircleLight size={28} />
          </Link>
          <Link href="/profile?screen=1">
            <div className="relative">
              <LuHeart size={23} />
              <div className="bg-black text-white flex items-center justify-center rounded-full leading-none size-3.5 text-[10px] absolute -top-1 -right-1">
                0
              </div>
            </div>
          </Link>
          <button onClick={() => cartOpen(true)}>
            <div className="relative">
              <RiShoppingBag3Line size={24} />
              <div className="bg-black text-white flex items-center justify-center rounded-full leading-none size-3.5 text-[10px] absolute -top-1 -right-1">
                3
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
