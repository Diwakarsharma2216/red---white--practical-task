import React from 'react'

import AddProductPage from "../compoent/AddProductPage"
import Product from '../compoent/Product'

const Homepage = () => {
  return (
    <div>
           <AddProductPage /> 

           <hr
        style={{
          margin:"15px",
          borderColor: 'red', // Replace with your desired color
          borderWidth: '2px', // Replace with your desired border width
        }}
      />
    
           <Product />
    </div>
  )
}

export default Homepage