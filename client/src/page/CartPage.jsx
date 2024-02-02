import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import CartItem from "../compoent/CartItem";



const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);


  const cartfetch=()=>{
    axios.get('http://localhost:8080/cart/view-cart')
    .then((res)=>{
      setCartItems(res.data.cartItems)
  
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    // Fetch cart items from the backend
    cartfetch()
   }, [cartItems]);

  const handleIncreaseQuantity = (cartItemId) => {
    axios.put(`http://localhost:8080/cart/increase-quantity/${cartItemId}`).then(() => {
      cartfetch()
     

    });
  };

  const handleDecreaseQuantity = (cartItemId) => {
    axios.put(`http://localhost:8080/cart/decrease-quantity/${cartItemId}`).then(() => {
      cartfetch()
    });
  };

  const handleRemoveFromCart = (cartItemId) => {
    axios.delete(`http://localhost:8080/cart/remove-from-cart/${cartItemId}`).then(() => {
      cartfetch()
    });
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading mb={4}>Cart Page</Heading>

        {cartItems.length === 0 ? (
          <Text>No items in the cart</Text>
        ) : (
          <>
            {cartItems.map((item) => ( 
              <CartItem
                key={item._id}
                product={item.productId}
                quantity={item.quantity}
                onIncrease={() => handleIncreaseQuantity(item._id)}
                onDecrease={() => handleDecreaseQuantity(item._id)}
                onRemove={() => handleRemoveFromCart(item._id)}
              />
            ))}
          </>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default CartPage;
