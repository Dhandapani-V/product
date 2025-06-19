"use client";

import React from "react";
import { Divider } from "@nextui-org/react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] text-white py-6 md:py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="text-center mb-6 border-b border-gray-700 pb-6">
            <h3 className="text-white font-bold mb-2 font-robotoslab">
              Quality Bearings Online Ltd
            </h3>
            <p className="mb-2">Canada - 438 800 2658</p>
            <a
              className="font-bold font-robotoslab inline-block"
              href="/contact-us/"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-r border-gray-700 pr-2">
              <h3 className="uppercase font-bold mb-3 font-robotoslab">
                Navigation
              </h3>
              <div className="flex flex-col gap-y-3 text-gray-400">
                {[
                  ["Home", "/"],
                  ["About Us", "/about-us/"],
                  ["10 Year Anniversary", "/10-year-anniversary/"],
                  ["Contact Us", "/contact-us/"],
                  ["Customer Service", "/customer-service/"],
                  ["Delivery Information", "/delivery-information/"],
                  ["FAQs", "/faqs/"],
                  ["Privacy Policy", "/privacy-policy/"],
                  ["Customer Reviews", "/customer-reviews/"],
                  ["Terms & Conditions", "/terms-and-conditions/"],
                  ["Blog", "/blog/"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className={`hover:text-white transition-colors font-robotoslab ${
                      label.includes("Terms") || label === "Blog"
                        ? "text-white opacity-50 hover:opacity-100"
                        : ""
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                [
                  "https://cdn11.bigcommerce.com/s-ur7wjnshy8/images/stencil/original/image-manager/footer-logo.png",
                  "British Business Excellence",
                ],
                [
                  "https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/sc21.png",
                  "SC21",
                ],
                [
                  "https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/Queens_Award_White.png",
                  "Queen's Award",
                ],
                [
                  "https://cdn11.bigcommerce.com/s-03842/content/Investers_In_People_23_24-01.jpg",
                  "Investors in People",
                ],
              ].map(([src, alt]) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="object-contain h-20"
                />
              ))}

              <div className="mt-6 ml-4">
                <h3 className="font-medium mb-2 text-sm font-robotoslab">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-3">
                  <a
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Facebook"
                    href="https://www.facebook.com/qualitybearings"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Instagram"
                    href="https://www.instagram.com/qualitybearings/"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/company/quality-bearings-online-limited/"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-2 font-robotoslab">
              Quality Bearings Online Ltd
            </h3>
            <p className="mb-2">Canada - 438 800 2658</p>
            <a className="font-bold font-robotoslab" href="/contact-us/">
              Contact Us
            </a>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase font-robotoslab">
              Navigate
            </h3>
            <div className="flex flex-col gap-y-2">
              {[
                ["Home", "/"],
                ["About Us", "/about-us/"],
                ["Contact Us", "/contact-us/"],
                ["Customer Service", "/customer-service/"],
                ["Delivery Information", "/delivery-information/"],
                ["FAQs", "/faqs/"],
                ["Privacy Policy", "/privacy-policy/"],
                ["Customer Reviews", "/customer-reviews/"],
                ["Terms & Conditions", "/terms-and-conditions/"],
                ["Blog", "/blog/"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-white opacity-50 hover:opacity-100 transition-opacity font-robotoslab"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <img
                src="https://cdn11.bigcommerce.com/s-ur7wjnshy8/images/stencil/original/image-manager/footer-logo.png"
                alt="Lloyds Bank British Business Excellence"
                className="h-[6rem] object-contain"
              />
              <img
                src="https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/sc21.png"
                alt="SC21"
                className="h-[6rem] object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <img
                src="https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/Queens_Award_White.png"
                alt="Queen's Award"
                className="h-20 w-[18rem] object-contain"
              />
              <img
                src="https://cdn11.bigcommerce.com/s-03842/content/Investers_In_People_23_24-01.jpg"
                alt="Investors in People"
                className="h-20 w-[18rem] object-contain"
              />
            </div>

            <div>
              <h3 className="font-bold mb-2 font-robotoslab">
                Follow Us on Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  className="opacity-50 hover:opacity-100 transition-opacity"
                  href="https://www.facebook.com/qualitybearings"
                >
                  <FacebookIcon size={24} />
                </a>
                <a
                  className="opacity-50 hover:opacity-100 transition-opacity"
                  href="https://www.instagram.com/qualitybearings/"
                >
                  <InstagramIcon size={24} />
                </a>
                <a
                  className="opacity-50 hover:opacity-100 transition-opacity"
                  href="https://www.linkedin.com/company/quality-bearings-online-limited/"
                >
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Divider className="mt-6 border-gray-700" />
      </div>
    </footer>
  );
};

export default Footer;
