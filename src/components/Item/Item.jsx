import React from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardBody,
  CardFooter,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertTrue, setAlertFalse } from "../../features/Cart/CartSlice";

const Item = ({ id, price, thumbnail, title }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetail = () => {
    if (user === null || user === undefined) {
      dispatch(setAlertTrue());
    } else {
      navigate(`/product/${id}`);
    }
  };

  return (
    <Card maxW="sm" boxShadow="sm" borderRadius="md">
      <CardBody p={3}>
        <Image
          src={thumbnail}
          alt={title}
          borderRadius="md"
          boxSize="100%"
          objectFit="cover"
          h="200px"
        />
        <Stack mt="3" spacing="2">
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <Text color="blue.600" fontSize="lg" fontWeight="bold">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter p={3} display="flex" justifyContent="center">
        <Button colorScheme="blue" size="sm" onClick={handleDetail}>
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
