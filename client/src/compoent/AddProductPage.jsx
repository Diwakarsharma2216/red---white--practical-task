

import React, { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Image,
  Alert,
  AlertIcon,
  Text,
  
} from '@chakra-ui/react';

import axios from 'axios';
const ProductAddPage = () => {
  const [product, setProduct] = useState({

    title: '',
    price: 0,
    description: '',
    category: '',
    image: "",
    
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

  
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    
  };


  // };

  const handleSubmit = () => {


  console.log(product)

    axios.post("http://localhost:8080/product/add",product).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    // Example: Simulating a successful submission
    if (
      product.title &&
      product.price &&
      product.description &&
      product.category &&
      // product.rating.rate > 0 &&
      product.image
    ) {
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      // Add logic to save the product data or redirect to another page
    } else {
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
    }
  };

  return (
    <ChakraProvider>
         <Box textAlign="center" fontSize="xl">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
         Add-Product
        </Text>
      </Box>
      <Box p={8}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <Select
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option >Select Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
      
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            name="image"
            value={product.image}
            onChange={handleInputChange}
          />
    {product.image && (
            <Image src={product.image} alt="Product Image" mt={2} height={"200px"} width={"200px"} />
          )}
        </FormControl>

       

        <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
          Add Product
        </Button>

        {showSuccessAlert && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            Product added successfully!
          </Alert>
        )}

        {showErrorAlert && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Please fill in all required fields and provide a valid rating.
          </Alert>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default ProductAddPage;
