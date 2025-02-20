import { Rating } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import noImage from "../assets/no-image.jpg";

function SingleProductCardComponent({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }
  return (
    <div className="w-[300px] h-[350px] border-2 border-slate-300 rounded-xl hover:border-slate-500 transition-all duration-300 overflow-hidden shadow-lg">
      <div className="relative w-full h-full lg:h-[60%]">
        <Link to={`/singleProduct/${product.id}`}>
          <img
            src={product.thumbnail ? product.thumbnail : noImage}
            alt={product.title}
            className="h-full w-full object-contain rounded-t-xl hover:scale-110 transition-all duration-300"
          />
        </Link>
        {/* overlay */}
        {/* {product.thumbnail ? (
          <div className="absolute inset-0 bg-[#000] opacity-60 rounded-t-xl hover:opacity-0 transition-all duration-300" />
        ) : (
          ""
        )} */}
      </div>

      <div className="h-[40%] flex flex-col items-start justify-between w-full px-[10px] py-[15px] relative">
        <Link
          to={`/singleProduct/${product.id}`}
          className="text-mainBlue font-semibold text-lg cursor-pointer"
        >
          {product.title}
        </Link>
        <p className="flex-center gap-[10px]">
          {" "}
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="badge">{product.rating.toFixed(1)}</span>
        </p>
        <p className="text-blackTextColor font-bold text-3xl">
          ${product.price}
        </p>
        <div
          className="heart-icon absolute bottom-[25px] right-[15px] cursor-pointer"
          onClick={handleLike}
        >
          {isLiked ? (
            <FaHeart size={20} color="#003F62" />
          ) : (
            <FaRegHeart size={20} color="#003F62" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
