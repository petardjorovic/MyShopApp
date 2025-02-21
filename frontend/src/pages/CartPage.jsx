import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ItemCartComponent from "../components/ItemCartComponent";
import countries from "../constants/countries";

function CartPage() {
  const [currentCoupon, setCurrentCoupon] = useState(null);
  const coupon = useRef();
  const { cart, totalAmount } = useSelector((state) => state.cartStore);

  function handleCoupon() {
    setCurrentCoupon(coupon.current.value);
    coupon.current.value = "";
  }
  return (
    <div className="px-[16px] lg:px-[0px]">
      {/*  left div */}
      <div className="my-[20px] lg:my-[50px]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-[10px]">
          {/* left side */}
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-4 bg-lightBlue h-[60px] place-items-center">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div>
              {cart.length > 0 ? (
                cart.map((el, i) => {
                  return <ItemCartComponent key={i} product={el} index={i} />;
                })
              ) : (
                <p className="text-3xl font-semibold mt-[50px] text-center">
                  Cart is empty
                </p>
              )}
            </div>
          </div>
          {/* right side */}
          <div className="w-full lg:w-[25%] flex flex-col">
            <div className="grid grid-cols-1 bg-lightBlue h-[60px] place-items-center mb-[20px]">
              <h1 className="text-2xl font-semibold">Cart Total</h1>
            </div>
            {/* dodji deo */}
            <div className="flex flex-col gap-[20px] items-center">
              <p className="text-2xl text-center">
                ${currentCoupon === "PetarDj" ? totalAmount / 2 : totalAmount}
              </p>
              {/* coupon */}
              <p>Insert Coupon for 50% discount</p>
              <div className="flex flex-row items-center justify-between bg-whiteTextColor rounded-full border px-[8px] w-full">
                <input
                  type="text"
                  placeholder="Enter coupon"
                  className="py-[6px] px-[8px] rounded-full outline-none"
                  ref={coupon}
                />
                <button
                  className="text-mainBlue py-[6px] px-[8px] rounded-full"
                  onClick={handleCoupon}
                >
                  Apply
                </button>
              </div>
              <select
                name="countries"
                className="w-full py-[6px] px-[8px] rounded-full outline-none border"
              >
                {countries.map((el, i) => {
                  return (
                    <option key={i} value={el.code}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <button className="bg-mainYellow text-white px-[24px] py-[12px] rounded-lg  w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
