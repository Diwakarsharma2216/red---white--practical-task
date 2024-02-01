const { Schema, model } = require("mongoose");


const categorySchema=Schema({
    name: String,
})


const categoryModel=model("Category",categorySchema)

module.exports=categoryModel