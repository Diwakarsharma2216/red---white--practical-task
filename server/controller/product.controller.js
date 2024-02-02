const express = require('express');
const productRouter=express.Router()
const multer = require('multer');
const ProductModel = require('../model/product.model');
const categoryModel = require('../model/category.model');





productRouter.post('/categories', async (req, res) => {
    try {
      const category = new categoryModel({ name: req.body.name });
      await category.save();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  productRouter.get('/categories', async (req, res) => {
    try {
      const categories = await categoryModel.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  productRouter.post('/add', async (req, res) => {
    try {
      const { category, title, description, price, image } = req.body;
  
      // Check if the product already exists
      const existingProduct = await ProductModel.findOne({ title });
  
      if (existingProduct) {
        return res.status(400).json({ error: 'Product already exists' });
      }
  
      // If not, add the product to the database
      const product = new ProductModel({ category, title, description, price, oldPrice, rating, inStock, image });
      await product.save();
  
      res.json({ message: 'Product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
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