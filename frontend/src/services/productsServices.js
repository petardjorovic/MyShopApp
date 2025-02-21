import axios from "axios";

class ProductsServices {
  static getAllProducts = (category) => {
    if (category === "All Products") {
      return axios.get("/products");
    } else {
      return axios.get("/products/categories/" + category);
    }
  };
  static getSingleProduct = (productId) => axios.get("/products/" + productId);
  static getAllCategories = () => axios.get("/products/categories");
}

export default ProductsServices;
