import { useState } from "react";
import { useSelector } from "react-redux";
import ItemCartComponent from "../components/ItemCartComponent";

function CartPage() {
  const { cart, totalAmount } = useSelector((state) => state.cartStore);
  return (
    <div>
      {cart.length > 0 ? (
        // left div
        <div className="mt-[20px] lg:mt-[50px]">
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
                {cart.map((el, i) => {
                  return <ItemCartComponent key={i} product={el} />;
                })}
              </div>
            </div>
            {/* right side */}
            <div className="w-full lg:w-[25%]">
              <div className="grid grid-cols-1 bg-lightBlue h-[60px] place-items-center">
                <p>Cart Total</p>
              </div>
              <p>{totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Nema proizvoda</div>
      )}
    </div>
  );
}

export default CartPage;
