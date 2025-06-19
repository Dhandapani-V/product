"use client";

import MegaMenu from "../components/navBar";
import ContactHeader from "../components/contactHeader";
import TopBar from "../components/topBar";
import CustomerServiceHighlights from "../components/customerService";
import OtherServices from "../components/services";
import TopCategories from "../components/categories/index";
import AboutQBL from "../components/aboutUs";
import ServicesSection from "../components/offers";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <ContactHeader />
            <TopBar />
      </div>
        <div className="pt-46">
      <MegaMenu />
      <CustomerServiceHighlights />
      <h1
             className="text-center text-[#1A2348] font-bold font-robotoslab text-2xl md:text-3xl pt-[30px] px-4 m-0 "
      >
        Industry Leading Bearings Supplier
      </h1>
      <OtherServices />
      <TopCategories />
      <AboutQBL />
      <ServicesSection />
      <Footer />
      </div>
    </div>
  );
};

export default HomePage;
