"use client";

import Image from "next/image";
import imageOne from "../../assets/s1.png";
import imageTwo from "../../assets/s2.png";
import imageThree from "../../assets/s3.png";
import imageFour from "../../assets/s4.png";

const services = [
  {
    title: "Super-Fast, Hassle Free Delivery",
    text: "Delivered within 1-3 days, with all tax & duties paid within USA & Canada. The price you see online is the price you pay.",
    img: imageOne,
    alt: "Super-Fast Delivery",
  },
  {
    title: "Unrivalled Customer Service",
    text: "With over 75 years' industry experience, you can trust Quality Bearings Online.",
    img: imageTwo,
    alt: "Expert Customer Service",
  },
  {
    title: "Multi-Award-Winning",
    text: "Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year.",
    img: imageThree,
    alt: "Multi-Award Winning",
  },
  {
    title: "World Renowned Brands",
    text: "Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more.",
    img: imageFour,
    alt: "World Renowned Brands",
  },
];

export default function OtherServices() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <li key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[16px] font-bold text-[#1A2348] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
