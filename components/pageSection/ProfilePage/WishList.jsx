import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import img from "@/public/images/rtk.png";
import { PiHandbag } from "react-icons/pi";
import { FetchApi } from "@/utils/FetchApi";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/utils/functions";
import { ImgUrl } from "@/constants/urls";
import Link from "next/link";
const WishList = () => {
  const [wishlist, setwishlist] = useState([]);
  const [refetch, setrefetch] = useState(false);
  const { auth } = useAuth();
  useEffect(() => {
    const loadData = async () => {
      const { data: wishlistData } = await FetchApi({
        url: `wishlist/api/get_wishlist/${auth?.customer?.id}`,
      });
      setwishlist(wishlistData.data);
    };
    loadData();
  }, [refetch]);
  const deleteWishlist = async (id) => {
    await FetchApi({
      url: `/wishlist/api/delete_wishlist/${id}/`,
      method: "delete",
      isToast: true,
    });
    setrefetch(!refetch)
  };
  return (
    <div>
      <p className="text-xl font-medium">Wishlist</p>
      <div className="mt-5">
        {
          wishlist.length === 0 && <p className="text-xl mt-5 text-center">0 Wishlist item found</p>
        }
        {wishlist.map((item, i) => {
          return (
            <div
              key={i}
              className="border border-[#EEEEEE] rounded-xl flex gap-3 items-center px-1 sm::px-3 justify-between"
            >
              <div className="flex items-center gap-1 sm:gap-3">
                <RiDeleteBin6Line
                  size={18}
                  onClick={() => deleteWishlist(item.id)}
                />
                <img
                  src={ImgUrl + item?.product?.featureImage}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-xl"
                ></img>
                <div className="space-y-1">
                  <p className="">{item?.product?.productName}</p>
                  <p className="text-xs font-bold">
                    ৳ {item?.product?.salePrice}
                  </p>
                </div>
              </div>
              <Link href={`/store/product/${item?.product?.id}`} className="flex items-center gap-1 bg-[#F6F6F6] text-sm px-3 py-1.5  rounded-full">
                <PiHandbag size={20} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
