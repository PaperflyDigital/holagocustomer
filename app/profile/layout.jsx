"use client";

import CopyRight from "@/components/global/CopyRight";
import NavigationBar from "@/components/global/NavigationBar";
import NavigationFooter from "@/components/global/navigationFooter";
import Cart from "@/components/store/Cart";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import { FiBox } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { logoutUser, useAuth } from "@/utils/functions";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [currentScreenItem, setCurrentScreenItem] = useState(0);
  const {auth} = useAuth()
  const navigations = [
    { icon: <CgProfile />, text: "Profile" },
    { icon: <GoHeart />, text: "Wishlist" },
    { icon: <PiHandbag />, text: "My Order" },
    { icon: <FiBox />, text: "Saved Address" },
    { icon: <BiLogOut />, text: "Logout" },
  ];
  useEffect(() => {
    if (currentScreenItem === 4) {
      logoutUser();
    }
    const url = new URL(window?.location);
    url.searchParams.set("screen", currentScreenItem);
    window.history.replaceState({}, "", url);
  }, [currentScreenItem]);

  return (
    <div>
      <NavigationBar cartOpen={setOpen} />
      <Cart setOpen={setOpen} open={open} />
      <div className="py-36 container">
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="border border-[#EEEEEE] rounded-xl p-4 lg:w-1/4">
            <p className="text-sm">Welcome back</p>
            <p className="text-xl font-medium">{auth?.customer?.name}</p>
            <div className="space-y-2 mt-3">
              {navigations.map((item, index) => (
                <button
                  key={index}
                  className={`flex gap-2 items-center p-3  rounded-xl w-full ${
                    index === 4 && "text-error"
                  } ${
                    currentScreenItem === index
                      ? "bg-black text-white"
                      : "bg-[#f6f6f6] text-black"
                  }`}
                  onClick={() => setCurrentScreenItem(index)}
                >
                  {item.icon}
                  <p className="text-sm">{item.text}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-3/4 ">{children}</div>
        </div>
      </div>
      <NavigationFooter />
      <CopyRight />
    </div>
  );
};

export default Layout;
