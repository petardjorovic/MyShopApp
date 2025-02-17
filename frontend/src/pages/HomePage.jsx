import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { handleAllProducts } from "../store/productsSlice";
import { toast } from "react-toastify";

function HomePage() {
  const dispatch = useDispatch();
  const { products, isLoaded } = useSelector((state) => state.productsStore);

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) => dispatch(handleAllProducts(res.data)))
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);
  return (
    <div>
      {isLoaded ? (
        products.map((el, i) => {
          return <p key={i}>{el.title}</p>;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default HomePage;
