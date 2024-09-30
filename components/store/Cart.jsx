import Image from "next/image";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import img from "@/public/images/rtk.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../global/Button";
import { useCart } from "@/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { ImgUrl } from "@/constants/urls";
import { decreaseQtyInCart, increaseQtyInCart, removeItemFromCart } from "@/utils/cartFunctions";

const Cart = ({ open, setOpen }) => {
  const { products } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed overflow-y-scroll top-0 w-full sm:max-w-[350px] z-[999] bg-white h-screen shadow-2xl ${
        open ? "right-0" : "-right-[700px] sm:-right-[500px]"
      } duration-300`}
    >
      <div className="p-3 flex flex-col justify-between h-full">
        <div className="">
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              Cart{" "}
              <span className="size-6 rounded-full bg-[#F6F6F6] flex justify-center items-center">
                {products.length}
              </span>
            </p>
            <IoIosCloseCircleOutline
              size={24}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>
          {
            products.length === 0 && <p className="text-xl text-center mt-10">0 Product added</p>
          }
          {products.map((item, i) => (
            <div
              key={i}
              className="flex mt-5 gap-3 border border-[#EEEEEE] rounded-xl"
            >
              <div className="w-2/5">
                <img
                  src={ImgUrl + item.image}
                  className="rounded-s-xl object-cover"
                  alt=""
                ></img>
              </div>
              <div className="space-y-2 mt-2 text-sm font-medium">
                <p className="">{item.productName}</p>
                <p className=" font-semibold">
                  ৳{item.salePrice * item.quantity}
                </p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    onClick={() => decreaseQtyInCart(products, i, 1, dispatch)}
                  >
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    size="sm"
                    onClick={() => increaseQtyInCart(products, i, 1, dispatch)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center pr-3">
                <RiDeleteBin6Line size={20} onClick={()=> removeItemFromCart(products, i, dispatch)}/>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 mt-10">
          <div className="flex justify-between">
            <p className="font-medium">Subtotal</p>
            <p className="font-semibold">৳1,400</p>
          </div>
          <Button className={"w-full !rounded-full"}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
