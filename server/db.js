const { default: mongoose } = require("mongoose");


const connection=mongoose.connect('mongodb://localhost:27017/red-white-product')

module.exports=connection