import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  deleteItemCartAction,
  setPriceHandlerAction,
} from "../store/cartSlice";

function ItemCartComponent({ product, index }) {
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
        {/*Property of product */}
        <div className="">
          <h2>{product.title}</h2>
        </div>
      </div>
      {/* Price */}
      <p>${product.price}</p>
      {/*Quantity buttons */}
      <div className="flex-center">
        <button
          className="w-[15px] px-[8px] py-[4px] border border-slate-400 text-[18px] bg-gray-200 flex flex-center justify-center rounded-sm rounded-r-none"
          onClick={() =>
            dispatch(setPriceHandlerAction({ increament: 1, index }))
          }
        >
          +
        </button>
        <span className="w-[25px] px-[8px] py-[4px] border-t border-slate-400 border-b  text-[18px] bg-gray-200 flex flex-center justify-center">
          {product.count}
        </span>
        <button
          className="w-[15px] px-[8px] py-[4px] border border-slate-400 text-[18px] bg-gray-200 flex flex-center justify-center rounded-sm rounded-l-none"
          onClick={() =>
            dispatch(setPriceHandlerAction({ increament: -1, index }))
          }
        >
          -
        </button>
      </div>
      {/* Cart Total */}
      <p className="font-semibold">${product.cartTotal.toFixed(2)}</p>
      <RxCrossCircled
        color="red"
        size={25}
        className="absolute top-[-10px] right-[5px] cursor-pointer"
        onClick={removeItemCart}
      />
    </div>
  );
}

export default ItemCartComponent;
