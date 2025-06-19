"use client";

import React, { useEffect, useMemo } from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useProductStore } from "../../store/products/product";

export default function ProductDetail({ productId }) {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const product = useMemo(() => {
    return products.find((p) => String(p.id) === String(productId));
  }, [products, productId]);

  if (!product)
    return <p className="p-10 text-center text-red-500">Product not found.</p>;

  return (
    <div className="min-h-screen px-4 md:px-20 py-10">
      <div className="text-center mb-8">
        <h1 className="text-center text-[#1A2348] font-bold font-robotoslab text-2xl md:text-3xl pt-[30px] px-4 m-0">
          Product Detail
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
          Discover our vintage-style bearings and parts, crafted with precision
          and inspired by timeless engineering. Perfect for restoration, hobby,
          or custom setups.
        </p>
      </div>
      <Card className="max-w-3xl mx-auto border border-gray-200 rounded-lg">
        <CardBody>
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              className="object-contain h-60 w-full rounded-md "
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-[#1A2348] font-robotoslab">
            {product.title}
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed text-base">
            {product.description}
          </p>
          <p className="text-xl font-semibold text-[#c99931] mt-4">
            ${product.price?.toFixed(2)}
          </p>
        </CardBody>
        <CardFooter>
          {/* <Button className="bg-[#c99931] text-white hover:bg-[#545b77]">Add to Cart</Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
