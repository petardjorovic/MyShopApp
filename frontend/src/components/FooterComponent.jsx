import logo from "../assets/logo.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function FooterComponent() {
  return (
    <footer className="bg-lightBlue py-[40px] px-[16px]">
      <div className="container mx-auto flex flex-col gap-[40px]">
        {/* top div */}
        <section className="flex flex-col lg:flex-row items-center lg:justify-between bg-whiteTextColor gap-[20px] p-[30px] rounded-2xl">
          <h3 className="text-mainBlue text-2xl font-bold">
            Subscribe newsletter
          </h3>
          <div className="flex-center bg-mainYellow py-[12px] px-[28px] rounded-lg">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent text-whiteTextColor placeholder:text-whiteTextColor outline-none"
            />
            <RiSendPlaneFill color="white" size={25} />
          </div>
          <div className="flex-center gap-[10px]">
            <FaHeadphonesSimple color="#EDA415" size={45} />
            <p className="text-2xl">+38123456789</p>
          </div>
        </section>
        {/* bottom div */}
        <div className="flex flex-col gap-[15px] items-center lg:flex-row lg:gap-[80px] lg:items-start">
          {/* bottom left */}
          <div className="flex flex-col gap-[20px]">
            <img src={logo} alt="logo" className="w-[254px]" />
            <div className="flex-center gap-[15px] pl-[10px] self-center lg:self-start">
              <FaInstagram size={23} />
              <FaFacebook size={23} />
            </div>
          </div>
          {/* bottom right */}
          <div className="flex items-start w-full justify-between">
            <div className="flex flex-col gap-[10px]">
              <h5 className="text-mainBlue text-2xl font-bold">
                Find Products
              </h5>
              <p className="text-mainBlue text-lg">Brownze arnold</p>
              <p className="text-mainBlue text-lg">Chronograph blue</p>
              <p className="text-mainBlue text-lg">Smart phones</p>
              <p className="text-mainBlue text-lg">Watches</p>
              <p className="text-mainBlue text-lg">Glasses</p>
              <p className="text-mainBlue text-lg">Fragrances</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h5 className="text-mainBlue text-2xl font-bold">Get Help</h5>
              <p className="text-mainBlue text-lg">Help & FAQs</p>
              <p className="text-mainBlue text-lg">Track Order</p>
              <p className="text-mainBlue text-lg">Corporate & Bulk Orders</p>
              <p className="text-mainBlue text-lg">Returns & Refunds</p>
              <p className="text-mainBlue text-lg">Shipping & Delivery</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h5 className="text-mainBlue text-2xl font-bold">About Us</h5>
              <p className="text-mainBlue text-lg">About Us</p>
              <p className="text-mainBlue text-lg">Careers</p>
              <p className="text-mainBlue text-lg">Our Blog</p>
              <p className="text-mainBlue text-lg">Terms & Conditions</p>
              <p className="text-mainBlue text-lg">Privacy Policy</p>
              <p className="text-mainBlue text-lg">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
