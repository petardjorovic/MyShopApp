import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get("/products");
  static getAllCategories = () => axios.get("/products/categories");
}

export default ProductsServices;
