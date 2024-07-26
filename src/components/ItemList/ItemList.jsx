import React from "react";
import Item from "../Item/Item";
import { Box, Grid } from "@chakra-ui/react";
const ItemList = ({ data }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      gap={6}
      p={4}
      w="full"
      justifyContent="center"
    >
      {data.map((producto) => (
        <Box key={producto.id} boxShadow="md" borderRadius="md">
          <Item {...producto} />
        </Box>
      ))}
    </Grid>
  );
};

export default ItemList;
