import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { handleAllProducts } from "../store/productsSlice";
import { toast } from "react-toastify";
import LoaderComponent from "../components/LoaderComponent";
import SingleProductCardComponent from "../components/SingleProductCardComponent";

// icons
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { allProducts, currentCategory } = useSelector(
    (state) => state.productsStore
  );
  const [activeView, setActiveView] = useState("gridView");

  useEffect(() => {
    ProductsServices.getAllProducts(currentCategory)
      .then((res) => {
        dispatch(handleAllProducts(res.data.products));
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, [currentCategory]);
  return (
    <main className="container mx-auto">
      {/* grid/list view */}
      <div className="flex-center justify-end mt-[20px] mr-[20px] gap-[10px]">
        <button
          onClick={() => setActiveView("listView")}
          className={activeView === "listView" ? "layoutView" : "p-[5px]"}
        >
          <FaList size={28} />
        </button>
        <button
          onClick={() => setActiveView("gridView")}
          className={activeView === "gridView" ? "layoutView" : "p-[5px]"}
        >
          <IoGridOutline size={28} />
        </button>
      </div>
      {/* Our products */}
      {isLoaded ? (
        // Wrapper div
        <div
          className={
            activeView === "listView"
              ? "flex flex-col items-start gap-[20px] my-[50px]"
              : "flex flex-wrap items-center justify-center gap-[50px] my-[50px]"
          }
        >
          {allProducts.map((el) => {
            return (
              <SingleProductCardComponent
                key={el.id}
                product={el}
                activeView={activeView}
              />
            );
          })}
        </div>
      ) : (
        // Our loader
        <LoaderComponent />
      )}
    </main>
  );
}

export default HomePage;
