const Product = require("../../models/products");

const createProducts = async (req, res) => {
  try {
    const { productDescription, productName, price, category, imageUrl } =
      req.body;
    const product = new Product({
      productName,
      productDescription,
      price,
      category,
      imageUrl,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

module.exports = createProducts;
