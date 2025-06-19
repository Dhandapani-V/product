"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon, MenuIcon, UserIcon, RecentIcon } from "../../assets";
import mainLogo from "../../assets/mainLogo.png";
import cartIcon from "../../assets/cart.png";
import { useProductStore } from "../../store/products/product";
import { useRouter } from "next/navigation";
import { getCartFromStorage, saveCartToStorage } from "../../store/utills";
// import { Menu, Search, ShoppingCart, User } from 'lucide-react'

const TopBar = () => {
  const { cartResponse } = useProductStore();
  console.log(cartResponse, "cartResponse");
  const router = useRouter();

  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = getCartFromStorage();
    const count = Object.values(cart).reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    return () => window.removeEventListener("cart-updated", updateCartCount);
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="logobox mx-auto md:py-5 flex items-center justify-between px-4">
        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden flex items-center"
          aria-label="Toggle mobile menu"
        >
          <MenuIcon />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src={mainLogo}
              alt="Logo"
              width={350}
              height={100}
              className="object-contain w-[150px] h-[50px] sm:w-[350px] sm:h-[100px]"
              priority
            />
          </Link>
        </div>

        {/* Search Input (Desktop) */}
        <div className="sm:block hidden px-2 pb-3">
          <form className="relative w-full" action="/search" method="get">
            <div className="flex">
              <input
                name="term"
                placeholder="Search by reference"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l font-light text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="px-4 py-2 bg-[#545b77] text-white rounded-r hover:bg-[#3d4255] transition-colors"
              >
                {/* Search Icon */}
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Sign In / Register */}

          <div className="hidden sm:flex gap-1 items-center text-[#1c2541] font-light text-sm">
            <UserIcon />
            <div className="flex flex-col items-start">
              <Link
                href="/login/?redirectTo=/"
                className="hover:underline text-md"
              >
                Sign In
              </Link>
              <Link href="/register/" className="hover:underline text-md">
                Register
              </Link>
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="hidden sm:flex flex-col items-center gap-1 text-[#1c2541] text-xs font-light">
            <div className="flex items-center gap-1">
              <RecentIcon />
              <div>
                <p className="text-sm">Recently</p>
                <p className="text-sm">Viewed</p>
              </div>
            </div>
          </div>

          {/* Mini Cart */}
          <div className="bg-white px-4 py-2 flex justify-end">
            <Button
              className="relative border-0"
              aria-label="Cart"
              onPress={() => router.push("/cartDetail")}
            >
              <Image src={cartIcon} alt="Cart" width={40} height={40} />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Search (Mobile) */}
      <div className="sm:hidden px-4 pb-3">
        <form className="relative w-full" action="/search" method="get">
          <div className="flex">
            <input
              name="term"
              placeholder="Search by reference"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l font-light text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="px-4 py-2 bg-[#545b77] text-white rounded-r hover:bg-[#3d4255] transition-colors"
            >
              {/* Search Icon */}
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopBar;
