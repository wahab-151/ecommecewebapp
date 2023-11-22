const Product = require("../../models/products");
const getAllproducts = async (req, res) => {
  try {
    const allproducts = await Product.find({}).populate("category");
    res.status(200).send({ allproducts });
  } catch (err) {
    res.status(404).json({ message: err.message || "products not found" });
  }
};
module.exports = getAllproducts;
