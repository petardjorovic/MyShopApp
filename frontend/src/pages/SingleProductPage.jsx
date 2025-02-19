import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsServices from "../services/productsServices";
import LoaderComponent from "../components/LoaderComponent";
import { Rating } from "@mui/material";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function SingleProductPage() {
  // * uzmi productId
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
  return (
    <div className="">
      {isLoaded ? (
        <div className="container mx-auto flex flex-col items-start md:flex-row px-[15px] my-[50px] gap-[10px]">
          {/* left side */}
          <div className="w-full md:w-[50%] items-center flex flex-col gap-[20px] border border-red-600">
            <img
              src={singleProduct.images[currentImage]}
              alt={singleProduct.title}
              className="border-2 border-mainBlue rounded-lg w-[80%] h-[70%] object-cover"
            />
            <div className="flex-center gap-[5px] w-[80%] justify-center flex-wrap">
              {singleProduct.images.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el}
                    className="w-[80px] h-[70px] object-cover border-2 border-mainBlue rounded-lg cursor-pointer"
                    onClick={() => handleCurrentImage(i)}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-[50%] flex items-center flex-col gap-[30px] border border-red-600">
            {/* top div */}
            <div className="w-[80%] border-b border-mainBlue flex flex-col items-start gap-[20px] py-[20px] border border-red-600">
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
            <div className="w-[80%] border-b border-mainBlue border border-red-600">
              <p className="text-[18px] text-blackTextColor">
                Total price:{" "}
                <span className="font-semibold">{singleProduct.price}$</span>
              </p>
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
