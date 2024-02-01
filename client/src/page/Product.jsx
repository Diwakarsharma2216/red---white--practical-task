import React, { useEffect, useState } from 'react'
import { ProductList } from '../compoent/ProductList '
import axios from 'axios'
import { Box,Heading,Text } from '@chakra-ui/react'

const Product = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/product/get").then((data)=>{
            setproducts(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[products])
  return (
    <div>
       
         <Box textAlign="center" fontSize="xl">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          E-commerce Product Catalog
        </Text>
        <ProductList products={products} />
      </Box>
    </div>
  )
}

export default Product