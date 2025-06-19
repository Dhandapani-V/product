"use client";

import { useEffect, useState } from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getCartFromStorage, saveCartToStorage } from "../../store/utills";

export default function ViewCart() {
  const [cart, setCart] = useState({});
  const router = useRouter();

  useEffect(() => {
    setCart(getCartFromStorage());
  }, []);

  const updateQuantity = (id, delta) => {
    const updated = { ...cart };
    if (updated[id]) {
      updated[id].quantity += delta;
      if (updated[id].quantity <= 0) delete updated[id];
      setCart(updated);
      saveCartToStorage(updated);
      window.dispatchEvent(new Event("cart-updated")); // For topbar count
    }
  };

  const handleRedirect = (productId) => {
    router.push(`/productDetail/${productId}`);
  };

  const cartItems = Object.values(cart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#1A2348] text-center font-robotoslab">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map(({ product, quantity }) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <CardBody className="flex flex-col sm:flex-row items-center gap-4">
                  <div
                    onClick={() => handleRedirect(product.id)}
                    className="flex sm:flex-row flex-col gap-4 items-center flex-1 cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="object-contain rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1A2348] font-robotoslab">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="mt-1 font-bold text-[#c99931]">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="bg-gray-200 text-gray-700"
                    >
                      -
                    </Button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="bg-gray-200 text-gray-700"
                    >
                      +
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}

          <div className="flex justify-between items-center mt-6 px-2">
            <p className="text-xl font-semibold text-[#1A2348]">Total:</p>
            <p className="text-xl font-bold text-[#c99931]">
              ${total.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <Button className="bg-[#c99931] text-white hover:bg-[#545b77] px-6 py-3 rounded-md flex items-center">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
