import React from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';

const CartItem = ({ product, onIncrease, onDecrease, onRemove,quantity }) => {
  return (
    <Flex align="center" justify="space-between" p={4} borderBottom="1px solid #ddd">
      <Box flex="1" mr={4}>
        <Image src={product.image} alt={product.title} maxH="50px" maxW="50px" />
      </Box>
      <Box flex="3">
        <Text fontSize="md" fontWeight="bold">
          {product.title}
        </Text>
        <Text fontSize="sm">{product.description}</Text>
      </Box>
      <Box flex="1">
        <Text fontSize="md">${product.price}</Text>
      </Box>
      <Box flex="1" textAlign="center">
        <Button size="sm" onClick={onDecrease} disabled={product.quantity === 1}>
          -
        </Button>
        <Text display="inline-block" mx={2}>
          {quantity}
        </Text>
        <Button size="sm" onClick={onIncrease}>
          +
        </Button>
      </Box>
      <Box flex="1" textAlign="right">
        <Button size="sm" colorScheme="red" onClick={onRemove}>
          Remove
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;
