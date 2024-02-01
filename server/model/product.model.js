const { Schema, Model, default: mongoose } = require("mongoose");

const productSchema=Schema({
      category: String,
    title: String,
    description: String,
    price: Number,
    //  rating:Number,
      image: String,
  })

  const ProductModel=mongoose.model("Product",productSchema)

  module.exports=ProductModel