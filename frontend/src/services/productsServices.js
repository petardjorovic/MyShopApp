import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get("/products");
  static getSingleProduct = (productId) => axios.get("/products/" + productId);
  static getAllCategories = () => axios.get("/products/categories");
}

export default ProductsServices;
