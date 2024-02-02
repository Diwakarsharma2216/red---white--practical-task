// Install Chakra UI and React if you haven't already
// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Image,
  Badge,
  Text,
  Stack,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';

 export const ProductCard = ({ product }) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const handleaddtocart=()=>{
    axios.post("http://localhost:8080/cart/add-to-cart",{productId:product._id}).then((res)=>{
      if(res){
        setShowSuccessAlert(true);
      setShowErrorAlert(false);
      }
    }).catch((err)=>{
      if(err){
        setShowSuccessAlert(false);
      setShowErrorAlert(true);
      }
    })
  }
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.title} height={"200px"}  width={"200px"} margin={"auto"}/>

      <Box p="6">
        <Stack spacing="1">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.category}
          </Badge>
          <Text fontWeight="bold" fontSize="xl">
            {product.title}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {product.description}
          </Text>
          <Text fontWeight="bold" fontSize="lg" mt="2">
            ${product.price}
          </Text>
         <Button colorScheme='teal' variant='link' onClick={handleaddtocart}>Add To Cart</Button>
        </Stack>
      </Box>
      {showSuccessAlert && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            Product added To cart successfully!
          </Alert>
        )}

{showErrorAlert && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Please fill in all required fields and provide a valid rating.
          </Alert>
        )}

    </Box>
  );
};



