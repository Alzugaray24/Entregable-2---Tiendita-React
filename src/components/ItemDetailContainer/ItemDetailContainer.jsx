import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useGetProductByIdQuery } from "../../services/Shop/shopService";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const { data: product, isLoading, error } = useGetProductByIdQuery(itemId);

  useEffect(() => {
    if (product) {
      console.log(product);
    }
  }, [product]);

  if (isLoading) {
    return <LoaderContainer isLoading={isLoading} />;
  }

  if (error) {
    return <div>Error loading product: {error.message}</div>;
  }

  return (
    <Flex direction="column" align="center" m={4}>
      <Box>
        <Heading>{product?.nombre}</Heading>
      </Box>
      <ItemDetail {...product} />
    </Flex>
  );
};

export default ItemDetailContainer;
