// Install Chakra UI and React if you haven't already
// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Image,
  Badge,
  Text,
  Stack,
} from '@chakra-ui/react';

 export const ProductCard = ({ product }) => {
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
         
        </Stack>
      </Box>
    </Box>
  );
};



