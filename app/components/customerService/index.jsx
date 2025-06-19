"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import imageOne from "../../assets/Customer.png";
import imageTwo from "../../assets/Delivery.png";
import imageThree from "../../assets/Queens.png";
import imageFour from "../../assets/qms.png";
import imageFive from "../../assets/logo.png";

const items = [
  {
    href: "",
    img: imageOne,
    alt: "Free Delivery",
    text: ["Free Delivery", "Over $300.00"],
  },
  {
    href: "",
    img: imageTwo,
    alt: "DHL & UPS Delivery",
    text: ["1-3 Day DHL & UPS", "Delivery"],
  },
  {
    href: "",
    img: imageThree,
    alt: "Queen's Award For Enterprise",
    text: ["Queen's Award For", "Enterprise Winners"],
  },
  {
    href: "",
    // external: true,
    img: imageFour,
    alt: "ISO Certificate",
    text: ["ISO 9001 : 2015", "Cert. No.291342018"],
  },
  {
    href: "",
    external: true,
    img: imageFive,
    alt: "Feefo logo",
    feefo: true,
  },
];

export default function CustomerServiceHighlights() {
  return (
    <div className="w-full bg-white border-y border-gray-200 py-4 shadow-md hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="w-fit flex items-center">
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.feefo ? 150 : 48}
                  height={item.feefo ? 38 : 48}
                  className={`mr-3 ${item.feefo ? "h-10 w-auto" : "w-12 h-12"}`}
                />
              </a>
            ) : (
              <Link href={item.href} className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="w-12 h-12 mr-3"
                />
                {item.text && (
                  <div className="text-[14px] font-bold font-robotoslab hover:text-blue-800 leading-snug">
                    {item.text.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
