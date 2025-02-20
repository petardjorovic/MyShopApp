import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteItemCartAction } from "../store/cartSlice";

function ItemCartComponent({ product }) {
  const dispatch = useDispatch();

  function removeItemCart() {
    dispatch(deleteItemCartAction(product));
  }
  return (
    <div className="grid grid-cols-4 place-items-center mt-[20px] relative border-b-2 pb-[10px]">
      <div className="flex-center gap-[10px]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-[100px] h-[90px] object-contain hidden md:flex"
        />
        {/* property of product */}
        <div className="">
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.stock}</p>
        </div>
      </div>
      <p>${product.price}</p>
      <div className="flex-center">
        <button className="w-[30px] px-[8px] py-[4px] border text-[18px] bg-slate-300 flex flex-center justify-center">
          +
        </button>
        <span className="w-[50px] px-[8px] py-[4px] border text-[18px] bg-slate-300 flex flex-center justify-center">
          {product.count}
        </span>
        <button className="w-[30px] px-[8px] py-[4px] border text-[18px] bg-slate-300 flex flex-center justify-center">
          -
        </button>
      </div>
      <p>${product.cartTotal}</p>
      <RxCrossCircled
        color="red"
        size={25}
        className="absolute top-[0] right-[15px]"
        onClick={removeItemCart}
      />
    </div>
  );
}

export default ItemCartComponent;
