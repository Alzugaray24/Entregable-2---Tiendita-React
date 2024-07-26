import { Box, Text } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import "./CartWidget.css";

const CartWidget = () => {
  const [quantity, setQuantity] = useState(0);

  const cart = useSelector((state) => state.cart.value.items);

  useEffect(() => {
    const calculateQuantity = () => {
      const updateQuantity = cart.reduce(
        (acc, actualValue) => acc + actualValue.quantity,
        0
      );
      setQuantity(updateQuantity);
    };

    calculateQuantity();
  }, [cart]);

  return (
    <Box ml={4} display="flex" align="center" justify={"space-around"}>
      <Link to={"/cart"}>
        <BiCart size={50} />
      </Link>
      <Text fontSize="2xl">{quantity}</Text>
    </Box>
  );
};

export default CartWidget;
