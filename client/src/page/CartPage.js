// CartPage.js
import React, { useState, useEffect } from 'react';
import { Container, Heading, Box, Text, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch the cart items from your backend API
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_API_URL/cart');
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error.message);
        // Handle error or show an error notification
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    try {
      // Send a request to your backend API to remove the product from the cart
      await axios.delete(`YOUR_BACKEND_API_URL/cart/${productId}`);
      // Optionally, you can handle success or show a notification
      console.log('Product removed from cart successfully');
      // Update the cart by removing the item
      setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    } catch (error) {
      console.error('Error removing product from cart:', error.message);
      // Handle error or show an error notification
    }
  };

  return (
    <Container>
      <Heading mb={4}>Cart Page</Heading>
      <VStack align="start" spacing={4}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Box key={item._id} borderWidth="1px" borderRadius="lg" p={4}>
              <Text>{item.productName}</Text>
              <Text>Category: {item.category}</Text>
              <Button colorScheme="red" mt={2} onClick={() => handleRemoveFromCart(item._id)}>
                Remove from Cart
              </Button>
            </Box>
          ))
        ) : (
          <Text>No items in the cart.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default CartPage;
