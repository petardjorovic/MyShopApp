import React, { useEffect, useState } from "react";
import ProductsServices from "../services/productsServices";
import { useDispatch, useSelector } from "react-redux";
import { handleAllCategories } from "../store/categoriesSlice";
import { toast } from "react-toastify";
import { setNewCategory } from "../store/productsSlice";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

function CategoryComponent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const { categories } = useSelector((state) => state.categoriesStore);
  const { currentCategory } = useSelector((state) => state.productsStore);

  useEffect(() => {
    ProductsServices.getAllCategories()
      .then((res) => {
        dispatch(handleAllCategories(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);

  function handleActiveCategory() {
    setIsActiveCategory(!isActiveCategory);
  }
  return (
    <div className="bg-slate-200 py-[5px]">
      <div className="container mx-auto flex flex-col items-center gap-[20px] h-full lg:flex-row">
        <div className="flex-center gap-[10px] text-mainBlue uppercase font-semibold">
          <button
            className="bg-mainBlue px-[16px] py-[6px] text-whiteTextColor rounded-lg hover:bg-mainYellow transition-all duration-300"
            onClick={location.pathname === "/" ? handleActiveCategory : null}
          >
            {isActiveCategory ? "Hide" : "Show"} Categories
          </button>
          {isActiveCategory ? (
            ""
          ) : (
            <>
              <IoIosArrowForward color="003F62" /> <p>{currentCategory}</p>
            </>
          )}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[10px]">
          {isActiveCategory ? (
            <li
              onClick={() => {
                dispatch(setNewCategory("All Products"));
                setIsActiveCategory(false);
              }}
              className={`${
                currentCategory === "All Products"
                  ? "bg-mainYellow"
                  : "bg-mainBlue"
              } px-[24px] py-[12px] text-center cursor-pointer rounded-lg text-whiteTextColor w-[250px] hover:bg-mainYellow transition-all duration-300`}
            >
              All Categories
            </li>
          ) : null}
          {isActiveCategory
            ? categories.map((el, i) => {
                return (
                  <li
                    onClick={() => {
                      dispatch(setNewCategory(el));
                      setIsActiveCategory(false);
                    }}
                    className={`${
                      currentCategory === el ? "bg-mainYellow" : "bg-mainBlue"
                    } px-[24px] py-[12px] cursor-pointer rounded-lg text-center text-whiteTextColor w-[250px] hover:bg-mainYellow transition-all duration-300`}
                    key={i}
                  >
                    {el}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
