"use client";

import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@nextui-org/react";
import { KeyboardDown , MailIcon ,MobileIcon } from "../../assets";

const ContactHeader = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("CAD");

  const handleSelectionChange = (key) => {
    setSelectedCurrency(String(key));
  };

  return (
    <div className="bg-black text-white py-2 px-4 hidden sm:block">
      <div className="mx-auto flex justify-end items-center">
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-end font-medium text-xs sm:text-sm">
          {/* About Us */}
          <a
            className="flex items-center gap-1 text-white hover:text-gray-300"
            href="/about-us/"
          >
            <span>About Us</span>
          </a>

          {/* Currency Dropdown */}
          <div className="flex items-center gap-1">
  <span className="hidden sm:inline">Select Currency:</span>
  <Dropdown>
    <DropdownTrigger>
      <Button
        variant="light"
        className="text-white uppercase font-semibold text-xs sm:text-sm px-2 py-1"
        size="sm"
      >
        <span className="flex items-center gap-1">
          {selectedCurrency}
          <KeyboardDown className="w-4 h-4" />
        </span>
      </Button>
    </DropdownTrigger>

    <DropdownMenu
      aria-label="Currency Options"
      onAction={handleSelectionChange}
      selectedKeys={[selectedCurrency]}
      selectionMode="single"
      className="min-w-[120px] py-1 flex flex-col gap-1"  // 👈 Ensures vertical stacking
      itemClasses={{
        base: "text-sm px-3 py-1 text-default-700 data-[hover=true]:bg-default-100",
        selected: "font-semibold text-primary",
      }}
    >
      <DropdownItem key="USD">USD</DropdownItem>
      <DropdownItem key="CAD">CAD</DropdownItem>
      <DropdownItem key="INR">INR</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>


          {/* Contact Us */}
          <a
            className="flex items-center gap-1 text-white hover:text-gray-300"
            // href="/contact-us/"
          >
            <MailIcon />
            <span>Contact Us</span>
          </a>

          {/* Phone Number */}
          <a
            className="flex items-center gap-1 text-white hover:text-gray-300"
            // href="tel:+14388002658"
          >
            <MobileIcon />
            <span className="hidden sm:inline">CAN:</span>
            <span>438 800 2658</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
