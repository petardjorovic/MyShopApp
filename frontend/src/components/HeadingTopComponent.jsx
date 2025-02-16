import React from "react";

// icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";

function HeadingTopComponent() {
  return (
    <div className="container mx-auto h-[90px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-[10px]">
      <h3 className="text-blackTextColor">
        Need help? Call us: (+98) 0234 456 789
      </h3>
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center gap-[5px]">
          <CiLocationOn size={25} />
          <span className="text-blackTextColor">Our store</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <CiDeliveryTruck size={25} />
          <span className="text-blackTextColor">Track your order</span>
        </div>
      </div>
    </div>
  );
}

export default HeadingTopComponent;
