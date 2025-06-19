"use client";

import { Image, Link, Button } from "@nextui-org/react";

const categories = [
  {
    title: "Precision Bearings",
    href: "/super-precision/",
    img: "https://www.qualitybearingsonline.com/product_images/Angular%20Contact.jpg",
    alt: "Precision Angular Contact Bearing Image",
  },
  {
    title: "Deep Groove Bearings",
    href: "/deep-groove-radial-ball-bearings",
    img: "https://www.qualitybearingsonline.com/product_images/Deep%20Groove.jpg",
    alt: "Deep Groove Bearings",
  },
  {
    title: "Taper Roller Bearings",
    href: "/taper-roller-bearings/",
    img: "https://www.qualitybearingsonline.com/product_images/Taper.jpg",
    alt: "Taper Roller Bearings",
  },
  {
    title: "Spherical Roller Bearings",
    href: "/spherical-roller-bearings",
    img: "https://www.qualitybearingsonline.com/product_images/Spherical%20Roller.jpg",
    alt: "Spherical Roller Bearings",
  },
  {
    title: "Maintenance Tools",
    href: "/maintenance-tools/",
    img: "https://www.qualitybearingsonline.com/product_images/Maintenance_Tools.png",
    alt: "Maintenance Tools",
  },
  {
    title: "Dow Corning Products",
    href: "/dow-corning",
    img: "https://www.qualitybearingsonline.com/product_images/dow.jpg",
    alt: "Dow Corning Products",
  },
  {
    title: "Kluber Lubricants",
    href: "/kluber-products",
    img: "https://www.qualitybearingsonline.com/product_images/Kluber.png",
    alt: "Kluber Products",
  },
  {
    title: "Shell Lubricants",
    href: "/shell",
    img: "https://www.qualitybearingsonline.com/product_images/shell.jpg",
    alt: "Shell",
  },
  {
    title: "Molykote Greases",
    href: "/molykote",
    img: "https://www.qualitybearingsonline.com/product_images/Paste.jpg",
    alt: "Molykote Products",
  },
  {
    title: "SKF Lubricants",
    href: "/skf-lubricants",
    img: "https://www.qualitybearingsonline.com/product_images/skf%20grease.jpg",
    alt: "SKF Lubricants",
  },
];

export default function TopCategories() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold text-[#1A2348] mb-4">Top Categories</h2>
      <p className="max-w-4xl mx-auto text-[#1A2348] font-robotoSlab text-base px-4 mb-10">
        Whatever bearing, adhesive, lubricant or grease you are after at Quality
        Bearings Online we are bound to stock it. As a leading bearings supplier
        we offer products from trusted industry manufacturers. Discover some of
        our top product categories below.
      </p>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((item, index) => (
            <Link key={index} className="group block text-center">
              <div className="w-full aspect-square bg-white rounded-md shadow-sm flex items-center justify-center p-3">
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="object-contain h-full w-full transition-transform group-hover:scale-105"
                  removeWrapper
                  radius="none"
                />
              </div>
              <h3 className="mt-3 font-bold text-[#1A2348] text-sm leading-tight">
                {item.title}
              </h3>
            </Link>
          ))}
          <div className="pt-4 flex justify-center col-span-full">
            <Button
              onPress={() => (window.location.href = "/products")}
              className="text-white font-semibold bg-[#ca9618] px-6 py-2 rounded-[4px] border-[1px] border-[#ca9618]"
              radius="full"
              // endContent={<rightIcon className="ml-2" /}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
