import React, { useEffect, useState } from 'react'
import { ProductList } from '../compoent/ProductList '
import axios from 'axios'
import { Box,Heading,Text,Container,VStack,Button,Input } from '@chakra-ui/react'

const Product = () => {
    const [products,setproducts]=useState([])
    const [name, setname] = useState('');

  
    useEffect(()=>{
        axios.get("http://localhost:8080/product/get").then((data)=>{
            setproducts(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[products])

    const handleAddCategory = () => {
       
       axios.post("http://localhost:8080/product/categories",{name}).then((res)=>{
        console.log(res)
        setname("")
       }).catch((err)=>{
        console.log(err)
       })
      
    };
  
  return (
    <div>

<Container>
      <Heading mb={4}>Category Page</Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={handleAddCategory}>
            Add Category
          </Button>
        </Box>
      </VStack>
    </Container>
       
    <hr
        style={{
          margin:"15px",
          borderColor: 'blue', 
          borderWidth: '2px', 
        }}
      />
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