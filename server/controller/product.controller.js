const express = require('express');
const productRouter=express.Router()
const multer = require('multer');
const ProductModel = require('../model/product.model');



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

productRouter.post('/categories', async (req, res) => {
    try {
      const category = new Category({ name: req.body.name });
      await category.save();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  productRouter.get('/categories', async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  productRouter.post('/add', async (req, res) => {
    try {
      const product = new ProductModel({
         category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        // rating: req.body.rating,
         image:req.body.image
      });
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  productRouter.get('/get', async (req, res) => {
    try {
      const products = await ProductModel.find().populate('category');
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports=productRouter