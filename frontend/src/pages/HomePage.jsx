import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { handleAllProducts } from "../store/productsSlice";
import { toast } from "react-toastify";
import LoaderComponent from "../components/LoaderComponent";
import SingleProductCardComponent from "../components/SingleProductCardComponent";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productsStore);

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) => {
        dispatch(handleAllProducts(res.data));
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);
  return (
    <main className="container mx-auto">
      {/* grid/list view */}

      {/* Our products */}
      {isLoaded ? (
        // Wrapper div
        <div className="flex flex-wrap items-center justify-center gap-[50px] my-[50px]">
          {allProducts.map((el) => {
            return <SingleProductCardComponent key={el.id} product={el} />;
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
