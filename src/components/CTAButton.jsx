import React from "react";

const CTAButton = ({ btnText = "Get Started", href = "/get-started", className = "", isDarkBg = true }) => {
  return (
    <a
      href={href}
      className={`text-center text-nowrap font-semibold xl:text-[18px] lg:text-[16px] text-[14px] px-8 py-2 border border-[#24CDAF] rounded-[30px] transition ${className} ${
        isDarkBg ? "bg-[#24CDAF] text-white hover:bg-[#009B8C]" : "bg-white text-[#24CDAF] hover:text-white hover:bg-[#009B8C]"
      }`}
    >
      {btnText}
    </a>
  );
};

export default CTAButton;
