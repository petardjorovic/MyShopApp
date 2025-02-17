import React from "react";
import HeadingTopComponent from "./HeadingTopComponent";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// logo
import logo from "../assets/finallogo.svg";

// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import CategoryComponent from "./CategoryComponent";

function NavbarComponent() {
  return (
    <div className="">
      <HeadingTopComponent />
      <nav className="bg-mainBlue h-full md:h-full lg:h-[100px] py-[10px]">
        <div className="container mx-auto flex flex-col md:flex-col lg:flex-row items-center h-full gap-[20px]  justify-between">
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
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    showName={true}
                    appearance={{
                      elements: {
                        avatarBox: "w-[40px] h-[40px]",
                      },
                      variables: {
                        colorText: "#EDA415",
                      },
                    }}
                  />
                </SignedIn>
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
      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
