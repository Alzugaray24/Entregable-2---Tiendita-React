import React, { useState } from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardBody,
  CardFooter,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/Cart/CartSlice";
import NotLogged from "../ErrorPages/notLogged/NotLogged";
import { useSelector } from "react-redux";

const ItemDetail = ({
  id,
  brand,
  category,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    const newObj = {
      id,
      title,
      price,
    };
    dispatch(addItemToCart({ newObj, quantity }));
  };

  return (
    <>
      {user === null || user === undefined ? (
        <NotLogged />
      ) : (
        <Card maxW="sm" boxShadow="md" borderRadius="md" overflow="hidden">
          :
          <Image
            src={thumbnail}
            alt={title}
            w="full"
            h="250px"
            objectFit="cover"
          />
          <CardBody p={6}>
            <Stack spacing={4}>
              <Box>
                <Heading size="lg" mb={2}>
                  {title}
                </Heading>
                <Badge colorScheme="teal">{category}</Badge>
              </Box>
              <Text color="gray.600" fontSize="md">
                {description}
              </Text>
              <Text color="blue.600" fontSize="2xl" fontWeight="bold">
                ${price}
              </Text>
              {discountPercentage > 0 && (
                <Text color="green.500" fontSize="lg">
                  {discountPercentage}% off
                </Text>
              )}
              <Text color="gray.500" fontSize="sm">
                Rating: {rating} / 5
              </Text>
              <Text color="gray.500" fontSize="sm">
                Stock: {stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter p={6} display="flex" justifyContent="center">
            {quantity > 0 ? (
              <Button as={Link} to="/cart" colorScheme="teal" size="lg">
                Go to Cart
              </Button>
            ) : (
              <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
            )}
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ItemDetail;
