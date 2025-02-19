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
    <div className="w-[300px] h-[350px] border border-slate-300 rounded-xl">
      <div className="relative w-full h-[60%]">
        <img
          src={product.thumbnail ? product.thumbnail : noImage}
          alt={product.title}
          className="h-full w-full object-cover rounded-t-xl"
        />
        {/* overlay */}
        {product.thumbnail ? (
          <div className="absolute inset-0 bg-[#000] opacity-60 rounded-t-xl hover:opacity-0 transition-all duration-300" />
        ) : (
          ""
        )}

        <div
          className="heart-icon absolute top-[25px] right-[15px] cursor-pointer"
          onClick={handleLike}
        >
          {isLiked ? (
            <FaHeart size={20} color="#003F62" />
          ) : (
            <FaRegHeart size={20} color="#003F62" />
          )}
        </div>
      </div>

      <div className="h-[40%] flex flex-col items-start justify-between w-full px-[10px] py-[15px]">
        <Link
          to={`/singleProduct/${product.id}`}
          className="text-mainBlue font-semibold text-lg cursor-pointer"
        >
          {product.title}
        </Link>
        <p className="text-blackTextColor font-semibold">${product.price}</p>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
          size="small"
        />
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
