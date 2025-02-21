import { Rating } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import noImage from "../assets/no-image.jpg";

function SingleProductCardComponent({ product, activeView }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }
  return (
    <div
      className={
        activeView === "gridView"
          ? "w-[300px] h-[350px] border-2 border-slate-300 rounded-xl hover:border-slate-500 transition-all duration-300 overflow-hidden shadow-lg"
          : "flex items-center justify-between gap-[15px] w-full h-[200px] border-b border-mainBlue px-[16px]"
      }
    >
      <div
        className={
          activeView === "gridView"
            ? "relative w-full h-[60%]"
            : "relative w-[15%]"
        }
      >
        <Link to={`/singleProduct/${product.id}`}>
          <img
            src={product.thumbnail ? product.thumbnail : noImage}
            alt={product.title}
            className={
              activeView === "gridView"
                ? "h-full w-full object-contain rounded-t-xl hover:scale-105 transition-all duration-300"
                : "w-[100px] h-[150px ]"
            }
          />
        </Link>
        {/* overlay */}
        {/* {product.thumbnail ? (
          <div className="absolute inset-0 bg-[#000] opacity-60 rounded-t-xl hover:opacity-0 transition-all duration-300" />
        ) : (
          ""
        )} */}
      </div>

      <div
        className={
          activeView === "gridView"
            ? "h-[40%] flex flex-col items-start justify-between w-full px-[10px] py-[15px] relative"
            : "flex items-center justify-between w-[80%]"
        }
      >
        <Link
          to={`/singleProduct/${product.id}`}
          className="text-mainBlue font-semibold text-lg cursor-pointer"
        >
          {product.title}
        </Link>
        <p
          className={
            activeView === "gridView"
              ? "flex-center gap-[10px]"
              : "hidden md:flex"
          }
        >
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
          className={
            activeView === "gridView"
              ? "heart-icon absolute bottom-[25px] right-[15px] cursor-pointer"
              : "hidden"
          }
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
