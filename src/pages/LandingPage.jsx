import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/LandingPage/HeroSection";
import LearnMore from "../components/LandingPage/LearnMore";
import VideoSection from "../components/LandingPage/VideoSection";
import AppSection from "../components/LandingPage/AppSection";
import WhySection from "../components/LandingPage/WhySection";
import TestimonialSection from "../components/LandingPage/TestimonialSection";
import PricingSection from "../components/PricingSection/PricingSection";
import Footer from "../components/Footer";
import AppDownloadSection from "../components/AppDownloadSection";

const LandingPage = () => {
  return (
    <div id="main-body" className="max-sm:bg-[#F0FBF9] ">
      <div className="flex flex-col md:max-h-[860px] sm:bg-[#E4FFFA] bg-[#F0FBF9]">
        <Navbar />
        <HeroSection />
      </div>
      <LearnMore />
      <VideoSection />
      <AppSection />
      <WhySection />
      <TestimonialSection />
      <PricingSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
