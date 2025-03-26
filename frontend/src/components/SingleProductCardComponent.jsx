import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import noImage from "../assets/no-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavoriteAction,
  saveFavoriteAction,
} from "../store/favoriteSlice";
import { motion } from "framer-motion";
import { saveItemInCartAction } from "../store/cartSlice";

function SingleProductCardComponent({ product, activeView }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(null);
  const { allFavorites } = useSelector((state) => state.favoriteStore);
  const dispatch = useDispatch();

  function handleAddToFavorite() {
    dispatch(saveFavoriteAction(product));
  }

  function handleAddToCart() {
    dispatch(saveItemInCartAction(product));
    dispatch(removeFavoriteAction(product));
  }

  useEffect(() => {
    checkIsLiked();
  }, [allFavorites]);

  function checkIsLiked() {
    setIsLiked(false);
    allFavorites.forEach((el, i) => {
      if (el.id == product.id) {
        setIsLiked(true);
        return;
      }
    });
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={
        activeView === "gridView"
          ? "w-[300px] h-[350px] border-2 border-slate-300 rounded-xl hover:border-slate-500 transition-all duration-300 overflow-hidden shadow-lg"
          : "flex items-center justify-between gap-[15px] w-[90%] mx-auto h-[200px] border-b border-mainBlue px-[16px]"
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
                ? "h-full w-full object-contain rounded-t-xl transition-all duration-300"
                : "w-[120px] h-[120px] object-contain"
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
        {location.pathname === "/favorite" && product.stock > 0 && (
          <div
            className={
              activeView === "gridView"
                ? "heart-icon absolute bottom-[25px] right-[60px] cursor-pointer flex-center justify-center"
                : "hidden"
            }
            onClick={handleAddToCart}
          >
            <MdOutlineAddShoppingCart color="#003F62" size={20} />
          </div>
        )}

        <div
          className={
            activeView === "gridView"
              ? "heart-icon absolute bottom-[25px] right-[15px] cursor-pointer flex-center justify-center"
              : "hidden"
          }
          onClick={handleAddToFavorite}
        >
          {isLiked ? (
            <FaHeart size={20} color="red" />
          ) : (
            <FaRegHeart size={20} color="#003F62" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default SingleProductCardComponent;
