const express = require('express');
const productRouter = require('./controller/product.controller');
const connection = require('./db');
const app = express();
const port = 8080;
const cors = require('cors');
const { cartrouter } = require('./controller/cart.controler');


app.use(express.json());
app.use(cors());
//  #### Product Routes #####

app.use("/product",productRouter)

//  #### cart Routes
app.use("/cart",cartrouter)


app.listen(port, async() => {

    try {
        await connection
        console.log(`>>>>>>>Server is running on port ${port}>>>>>>`);
    } catch (error) {
        
    }
   
  });