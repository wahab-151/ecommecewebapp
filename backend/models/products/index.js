const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  productName: { type: String },
  price: { type: Number },
  productDescription: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  imageUrl: { type: String },
});
module.exports = model("product", productSchema);
