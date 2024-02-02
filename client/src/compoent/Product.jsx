import React, { useEffect, useState } from 'react'
import { ProductList } from './ProductList '
import axios from 'axios'
import { Box,Heading,Text,Container,VStack,Button,Input, Stack } from '@chakra-ui/react'

const Product = () => {
    const [products,setproducts]=useState([])
    const [categories, setcategories] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(()=>{
        axios.get("http://localhost:8080/product/get").then((data)=>{
          // console.log(products)
            setproducts(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[products])

    const handleAddCategory = () => {
       
       axios.post("http://localhost:8080/product/categories",{categories}).then((res)=>{
        console.log(res)
        setcategories("")
       }).catch((err)=>{
        console.log(err)
       })
      
    };


    const handlefilter=(val)=>{
      if (val === "all") {
        setFilteredProducts(products); 
      } else {
        let data = products.filter((el) => el.category === val);
        setFilteredProducts(data);
      }
    }
  
  return (
    <div>

<Container>
      <Heading mb={4}>Category Page</Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Input
            type="text"
            placeholder="Enter category name"
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
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

      {/* #### Filter part here*/}
      <Stack direction={{base:"column",md:"row"}} spacing={4} align='center' justifyContent={"center"}>
      <Button colorScheme='teal' variant='outline' onClick={() => handlefilter("all")}>
          All
        </Button>
  <Button colorScheme='teal' variant='outline' onClick={()=>handlefilter("women's clothing")}>
  women's clothing
  </Button>
  <Button colorScheme='teal' variant='outline' onClick={()=>handlefilter("electronics")}>
  electronics
  </Button>
  <Button colorScheme='teal' variant='outline' onClick={()=>handlefilter("jewelery")}>
  jewelery
  </Button>
  <Button colorScheme='teal' variant='outline' onClick={()=>handlefilter("men's clothing")}>
  men's clothing
  </Button>
</Stack>

         <Box textAlign="center" fontSize="xl">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          E-commerce Product 
        </Text>
        <ProductList products={filteredProducts} />
      </Box>
    </div>
  )
}

export default Product