import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsServices from "../services/productsServices";
import LoaderComponent from "../components/LoaderComponent";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// icons
import { FaCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { saveItemInCartAction } from "../store/cartSlice";

function SingleProductPage() {
  // * uzmi productId
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsServices.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  function handleAddToCart() {
    dispatch(saveItemInCartAction(singleProduct));
  }
  return (
    <div className="">
      {isLoaded ? (
        <div className="container mx-auto flex flex-col items-start md:flex-row px-[15px] my-[50px] gap-[10px]">
          {/* left side */}
          <div className="w-full md:w-[50%] items-center flex flex-col gap-[20px]">
            <img
              src={singleProduct.images[currentImage]}
              alt={singleProduct.title}
              className=" rounded-lg w-[70%] h-[70%] object-cover"
            />
            <div className="flex-center gap-[5px] w-[80%] justify-center flex-wrap">
              {singleProduct.images.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el}
                    className={
                      "w-[80px] h-[70px] object-contain border border-mainBlue rounded-lg cursor-pointer " +
                      (currentImage === i ? "border-2" : "")
                    }
                    onClick={() => handleCurrentImage(i)}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-[50%] flex items-center flex-col gap-[30px]">
            {/* top div */}
            <div className="w-[80%] border-b border-mainBlue flex flex-col items-start gap-[20px] py-[20px]">
              <h2 className="font-extrabold text-mainBlue text-2xl">
                {singleProduct.title}
              </h2>
              <span className="text-blueTextColor text-[20px]">
                ${singleProduct.price}
              </span>
              <p className="flex-center gap-[10px]">
                <span className="text-blackTextColor text-[18px]">
                  Reviews:{" "}
                </span>

                <Rating
                  name="half-rating-read"
                  defaultValue={singleProduct.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </p>
              <p className="flex-center gap-[10px] text-[18px]">
                Availability:
                {singleProduct.stock ? (
                  <span className="flex-center gap-[10px] text-lightGreen">
                    <FaCheck size={18} /> In stock
                  </span>
                ) : (
                  <span className="flex-center gap-[10px] text-mainRed">
                    <ImCross size={15} /> Out of stock
                  </span>
                )}
              </p>
              <p className="text-[18px]">
                Hurry up? only{" "}
                <span className="font-bold">{singleProduct.stock}</span>{" "}
                products left in stock
              </p>
            </div>
            {/* bottom div */}
            <div className="flex flex-col w-[80%] gap-[20px]">
              <p className="text-[18px] text-blackTextColor">
                Total price:{" "}
                <span className="font-semibold">{singleProduct.price}$</span>
              </p>
              {/* ADD / Favorite button */}
              <div className="flex-center gap-[30px]">
                <Link
                  onClick={handleAddToCart}
                  to={"/cart"}
                  className="bg-mainYellow px-[24px] py-[12px] rounded-xl text-whiteTextColor shadow-md"
                >
                  Add to Cart
                </Link>
                <Link
                  to={"/"}
                  className="bg-lightBlue px-[20px] py-[10px] rounded-xl border border-mainBlue shadow-md"
                >
                  <FaRegHeart size={28} color="#003F62" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default SingleProductPage;
