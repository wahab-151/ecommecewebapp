const products = require("../../models/products");

const getProductByCategory = async (req, res) => {
  const { categoryName } = req.params;

  try {
    const productsWithCategories = await products.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $match: {
          "category.categoryName": categoryName,
        },
      },
      {
        $project: {
          productName: 1,
          price: 1,
          productDescription: 1,
          imageUrl: 1,
        },
      },
    ]);

    res.status(200).json({ Product: productsWithCategories });
  } catch (err) {
    res.status(404).json({ message: err.message || "Product not found" });
  }
};

module.exports = getProductByCategory;
