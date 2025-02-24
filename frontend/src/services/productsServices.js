import axios from "axios";

class ProductsServices {
  static getAllProducts = (category) => {
    if (category === "All Products") {
      return axios.get("/products");
    } else {
      return axios.get("/products/category/" + category);
    }
  };
  static getSingleProduct = (productId) => axios.get("/products/" + productId);
  static getAllCategories = () => axios.get("/products/category-list");
}

export default ProductsServices;
