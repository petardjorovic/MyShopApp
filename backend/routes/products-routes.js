const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/category-list", productsController.allCategories);

router.get(
  "/category/:categoryName",
  productsController.getAllProductsByCategory
);

router.get("/", productsController.allProducts);

router.get("/:productId", productsController.singleProduct);

module.exports = router;
