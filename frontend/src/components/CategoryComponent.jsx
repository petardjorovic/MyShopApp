import React, { useEffect, useState } from "react";
import ProductsServices from "../services/productsServices";
import { useDispatch, useSelector } from "react-redux";
import { handleAllCategories } from "../store/categoriesSlice";
import { toast } from "react-toastify";

function CategoryComponent() {
  const dispatch = useDispatch();
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const { categories } = useSelector((state) => state.categoriesStore);

  useEffect(() => {
    ProductsServices.getAllCategories()
      .then((res) => dispatch(handleAllCategories(res.data)))
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);

  function handleActiveCategory() {
    setIsActiveCategory(!isActiveCategory);
  }
  return (
    <div className="bg-slate-200 py-[20px]">
      <div className="container mx-auto flex flex-col items-center gap-[20px] h-full lg:flex-row transition-all duration-300">
        <button
          className="bg-mainBlue px-[24px] py-[12px] text-whiteTextColor rounded-lg hover:bg-mainYellow transition-all duration-300"
          onClick={handleActiveCategory}
        >
          {isActiveCategory ? "Hide" : "Show"} Categories
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[10px] transition-all duration-300">
          {isActiveCategory ? (
            <li className="bg-mainBlue px-[24px] py-[12px] text-center cursor-pointer rounded-lg text-whiteTextColor w-[250px] hover:bg-mainYellow transition-all duration-300">
              All Categories
            </li>
          ) : null}
          {isActiveCategory
            ? categories.map((el, i) => {
                return (
                  <li
                    className="bg-mainBlue px-[24px] py-[12px] cursor-pointer rounded-lg text-center text-whiteTextColor w-[250px] hover:bg-mainYellow transition-all duration-300"
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
