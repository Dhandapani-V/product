"use client";

import React from "react";
import { KeyboardDown } from "../../assets";

const menuItems = [
  { label: "Adhesives & Lubricants", href: "/adhesives-lubricants/" },
  { label: "Brands", href: "/brands/" },
  { label: "Ball Bearings", href: "/ball-bearings/" },
  { label: "Roller Bearings", href: "/roller-bearings/" },
  { label: "Housings and Inserts", href: "/housings-inserts/" },
  { label: "Linear", href: "/linear/" },
  { label: "Super Precision", href: "/super-precision/" },
  { label: "Spherical Plains", href: "/spherical-plains/" },
  { label: "Power Transmission", href: "/power-transmission/" },
  { label: "Maintenance Tools", href: "/maintenance-tools/" },
  { label: "Oil Seals", href: "/oil-seals/" },
];

const TopNav = () => {
  return (
    <nav className="relative hidden lg:block bg-[#1a2348]">
      <div className="!max-w-[unset]">
        <ul className="flex items-center justify-center flex-wrap font-oswald">
          {menuItems.map((item) => (
            <li key={item.href} className="static">
              <a
                // href={item.href}
                className="flex text-white py-4 px-3 xl:px-2 hover:bg-blue-900 transition-colors  items-center gap-1 font-bold text-base whitespace-nowrap"
              >
                <span>{item.label}</span>
                <KeyboardDown className="w-4 h-4 inline-block ml-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
