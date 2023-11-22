const Category = require("../../models/category");
const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({});
    res.status(200).send({ allCategories });
  } catch (err) {
    res.status(404).json({ message: err.message || "categories not found" });
  }
};
module.exports = getAllCategories;
