
import React, { useState } from 'react';
import { Container, Heading, Box, Input, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';

const CategoryPage = () => {
  const [category, setCategory] = useState('');

  const handleAddCategory = async () => {
    try {
      // Send a request to your backend API to add the category to MongoDB or MySQL
      await axios.post('YOUR_BACKEND_API_URL/categories', { category });
     
      console.log('Category added successfully');
      // Clear the input field
      setCategory('');
    } catch (error) {
      console.error('Error adding category:', error.message);
      
    }
  };

  return (
    <Container>
      <Heading mb={4}>Category Page</Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Input
            type="text"
            placeholder="Enter category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={handleAddCategory}>
            Add Category
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default CategoryPage;
