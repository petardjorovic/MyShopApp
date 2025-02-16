import React from "react";
import HeadingTopComponent from "./HeadingTopComponent";

// logo
import logo from "../assets/finallogo.svg";

// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="">
      <HeadingTopComponent />
      <nav className="bg-mainBlue md:h-[100px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full justify-between">
          {/* logo */}
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          {/* search bar */}
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent px-[25px] py-[17px] outline-none"
            />
            <button className="bg-mainYellow text-whiteTextColor px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>

          {/* links */}
          <div>
            <ul className="flex-center gap-[20px]">
              <li className="flex-center gap-[10px]">
                <CiUser size={25} color="white" />
                <Link to={"/"} className="text-whiteTextColor">
                  Sign In
                </Link>
              </li>
              <li className="flex-center gap-[10px]">
                <div className="flex-center">
                  <CiHeart size={25} color="white" />
                  <span className="badge-counter">0</span>
                </div>
                <Link to={"/"} className="text-whiteTextColor">
                  Favorites
                </Link>
              </li>
              <li className="flex-center gap-[10px]">
                <div className="flex-center">
                  <CiShoppingCart size={25} color="white" />
                  <span className="badge-counter">0</span>
                </div>
                <Link to={"/cart"} className="text-whiteTextColor">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
