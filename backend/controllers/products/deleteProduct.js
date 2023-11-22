const Products = require("../../models/products");

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const deleteproduct = await Products.deleteOne({ _id: productId });
    res.status(200).send({ deleteproduct });
  } catch (err) {
    res.status(500).json({ message: err.message || "something went   wrong" });
  }
};

module.exports = deleteProduct;
