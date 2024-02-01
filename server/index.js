const express = require('express');
const productRouter = require('./controller/product.controller');
const connection = require('./db');
const app = express();
const port = 8080;
const cors = require('cors');


app.use(express.json());
app.use(cors());
//  #### Product Routes #####

app.use("/product",productRouter)


app.listen(port, async() => {

    try {
        await connection
        console.log(`>>>>>>>Server is running on port ${port}>>>>>>`);
    } catch (error) {
        
    }
   
  });