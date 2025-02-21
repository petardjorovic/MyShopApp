const Product = require("../models/ProductModel");

const allProducts = async (req, res, next) => {
  try {
    const products = await Product.find().lean().select("-_id");
    res.send(products);
  } catch (error) {
    console.log(err);
  }
};

const singleProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const [product] = await Product.find({ id: productId })
      .lean()
      .select("-_id");
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

const allCategories = async (req, res, next) => {
  try {
    const categories = await Product.distinct("category");
    res.send(categories);
  } catch (error) {
    console.log(err);
  }
};

const getAllProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category: category });
    res.send(products);
  } catch (error) {
    console.log(err);
  }
};

module.exports = {
  allProducts,
  singleProduct,
  allCategories,
  getAllProductsByCategory,
};
