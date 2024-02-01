import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard ";
import { Grid,GridItem} from "@chakra-ui/react";

 export const ProductList = ({ products }) => {
   console.log(products)

    return (
      <Grid
      templateColumns='repeat(2, 1fr)'
        gap={6}
        p={6}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    );
  };

  