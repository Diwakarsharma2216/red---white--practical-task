import React, { useEffect, useState } from 'react'
import { ProductList } from '../compoent/ProductList '
import axios from 'axios'
import { Box,Text } from '@chakra-ui/react'

const Product = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((data)=>{
            setproducts(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
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