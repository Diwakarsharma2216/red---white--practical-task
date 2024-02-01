const { Schema, Model, default: mongoose } = require("mongoose");

const productSchema=Schema({
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    title: String,
    description: String,
    price: Number,
    oldPrice: Number,
    // rating: Number,
    inStock: Number,
    // image: Buffer,
  })

  const ProductModel=mongoose.model("Product",productSchema)

  module.exports=ProductModel