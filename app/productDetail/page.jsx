"use client";

import ProductDetail from "../components/productDetail";
import ContactHeader from "../components/contactHeader";
import TopBar from "../components/topBar";
import Footer from "../components/footer";
import React from "react";

export default function Page({ params }) {
  // const productId = params?.id
  const { id } = React.use(params);

  console.log("Product ID from query:", id);
  return (
    <div>
      <p>{id}</p>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <ContactHeader />
        <TopBar />
      </div>
      <div className="pt-46">
        <ProductDetail />
        <Footer />
      </div>
    </div>
  );
}
