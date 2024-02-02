const Cart = require("../model/cart.model");
const express=require("express")
const cartrouter = express.Router();


cartrouter.post("/add-to-cart",async (req, res) => {
    try {
      const { productId } = req.body;
   
  
     
      const existingCartItem = await Cart.findOne({ productId });
  
      if (existingCartItem) {
        return res.status(400).json({ error: 'Product already in the cart' });
      }
  
    
      const cartItem = new Cart({ productId });
      await cartItem.save();
  
      res.json({ message: 'Product added to the cart' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })




  cartrouter.get('/view-cart',async (req, res) => {
    try {
    
  
      
      const cartItems = await Cart.find().populate('productId');
  
      res.json({ cartItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



//    ##### some feauture ######

cartrouter.put("/increase-quantity/:cartItemId",async (req, res) => {
    try {
      const { cartItemId } = req.params;
  
     
      await Cart.findByIdAndUpdate(cartItemId, { $inc: { quantity: 1 } });
  
      res.json({ message: 'Quantity increased successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



  cartrouter.put("/decrease-quantity/:cartItemId",async (req, res) => {
    try {
      const { cartItemId } = req.params;
  
    
      await Cart.findByIdAndUpdate(cartItemId, { $inc: { quantity: -1 } });
  
      res.json({ message: 'Quantity decreased successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })


  cartrouter.delete("/remove-from-cart/:cartItemId",async (req, res) => {
    try {
      const { cartItemId } = req.params;
  
   
      await Cart.findByIdAndDelete(cartItemId);
      
      res.json({ message: 'Product removed from the cart successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



  module.exports = {
    cartrouter,
  };




