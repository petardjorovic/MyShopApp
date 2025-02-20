const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/categories", productsController.allCategories);
router.get("/", productsController.allProducts);
router.get("/:productId", productsController.singleProduct);

module.exports = router;
