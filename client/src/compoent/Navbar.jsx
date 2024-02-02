// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Spacer, ChakraProvider } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex p="4" bg="teal.500" align="center">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          My Store
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Link to="/cart">
          <Text fontSize="lg" color="white" fontWeight="bold" mr="4">
            Cart
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
