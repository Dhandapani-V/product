// pages/product-list.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useProductStore } from "../../store/products/product.js";
import { getCartFromStorage, saveCartToStorage } from "../../store/utills";
import { ProductSkeleton } from "./skeleton.jsx";

export default function ProductList() {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const { fetchProducts, products, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
    setCart(getCartFromStorage());
  }, []);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += 1;
    } else {
      updatedCart[product.id] = { product, quantity: 1 };
    }
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-20">
      <div className="text-center mb-8">
        <h1 className="text-center text-[#1A2348] font-bold font-robotoslab text-2xl md:text-3xl pt-[30px] px-4 m-0">
          Products
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
          Discover our vintage-style bearings and parts, crafted with precision
          and inspired by timeless engineering. Perfect for restoration, hobby,
          or custom setups.
        </p>
      </div>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card className="border border-gray-200 rounded-lg transition-shadow hover:shadow-md h-full flex flex-col">
                <CardBody
                  onClick={() => router.push(`/productDetail/${product.id}`)}
                  className="cursor-pointer flex-grow"
                >
                  <div className="h-40 w-full flex items-center justify-center bg-white">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="object-contain h-full w-full p-4"
                      removeWrapper
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-gray-700 font-semibold font-robotoslab line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardBody>

                <CardFooter className="flex justify-between items-center border-t border-gray-100">
                  <p className="font-bold text-[#c99931]">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button
                    size="sm"
                    onPress={() => {
                      addToCart(product);
                    }}
                    className="bg-[#c99931] text-white hover:bg-[#545b77] flex items-center px-6 py-3 rounded-md"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
