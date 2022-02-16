const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    id: { type: Number, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    image: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    category: { type: String, required: true },
    categoryImage: {
      mobile: { type: String, requierd: true },
      tablet: { type: String, requierd: true },
      desktop: { type: String, required: true },
    },
    new: { type: Boolean, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    features: { type: String, required: true },
    includes: [
      {
        quantity: { type: Number, required: true },
        item: { type: String, rqeuired: true },
      },
    ],
    gallery: {
      first: {
        mobile: { type: String, requierd: true },
        tablet: { type: String, requierd: true },
        desktop: { type: String, required: true },
      },
      second: {
        mobile: { type: String, requierd: true },
        tablet: { type: String, requierd: true },
        desktop: { type: String, required: true },
      },
      third: {
        mobile: { type: String, requierd: true },
        tablet: { type: String, requierd: true },
        desktop: { type: String, required: true },
      },
    },
    others: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        image: {
          mobile: { type: String, requierd: true },
          tablet: { type: String, requierd: true },
          desktop: { type: String, required: true },
        },
      },
    ],
  },
  { timestamps: true, collection: "audiophile-products" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
