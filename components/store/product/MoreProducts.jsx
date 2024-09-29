"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import catPic from "@/public/images/cuban-cat.png";
import { FetchApi } from "@/utils/FetchApi";
import Link from "next/link";
import { ImgUrl } from "@/constants/urls";
import Button from "@/components/global/Button";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const { data } = await FetchApi({ url: "/products/api/get-allProducts" });
      setProducts(data.data);
    };
    loadData();
  }, []);
  return (
    <div className="my-5">
      <p className="text-2xl">You May Also Like</p>
      <div className="mt-5">
        <div
          // ref={sliderRef}
          className="md:flex grid grid-cols-2 gap-3 my-5  md:overflow-x-scroll hidden_scrollbar"
        >
          {products.map((product) => (
            <Link
              href={`/store/product/${product.id}`}
              className="border rounded-md"
              key={product.id}
            >
              <div className="">
                <img
                  className=" rounded-md w-[300px] max-h-[500px] object-cover object-center"
                  src={ImgUrl + product.images[0].image}
                  alt="earphone"
                />
              </div>
              <div className="secondary-color p-3">
                <h3 className="">{product.productName}</h3>
                <div className="flex items-end gap-2">
                  <p className="font-semibold">৳ {product.salePrice}</p>
                  <p className="font-medium line-through text-gray-400 text-sm">
                    ৳ {product.regularPrice}
                  </p>
                </div>
                <Button size="sm" rounded="sm" className={"w-full mt-2"}>
                  Add to cart
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
