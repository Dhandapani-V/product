"use client";

import ProductList from "../components/productlist";
import MegaMenu from "../components/navBar";
import ContactHeader from "../components/contactHeader";
import TopBar from "../components/topBar";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <ContactHeader />
        <TopBar />
      </div>
      <div className="pt-46">
        <MegaMenu />
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}
