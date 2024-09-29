"use client";
import React, { useEffect, useState } from "react";
import pci from "@/public/images/cuban-cat.png";
import Image from "next/image";
import { FetchApi } from "@/utils/FetchApi";
import Button from "@/components/global/Button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);
  const queries = useSearchParams();
  useEffect(() => {
    const loadData = async () => {
      const { data } = await FetchApi({ url: "/products/api/get-allProducts" });
      setProducts(data.data);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="pt-10 text-xl">
        {queries.get("search") && (
          <p>
            Search results for{" "}
            <span className="font-bold">{queries.get("search")}</span>
          </p>
        )}
      </div>
      <div className="py-8 grid grid-cols-5 gap-5">
        {products.map((product) => (
          <Link
            href={`/store/product/${product.id}`}
            className="border rounded-md"
            key={product.id}
          >
            <div className="">
              <Image className=" rounded-md " src={pci} alt="earphone" />
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
  );
};

export default Page;
