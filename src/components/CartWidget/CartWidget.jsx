import { Box } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Context as CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Box
      width={"40%"}
      ml={4}
      display="flex"
      align="center"
      justify={"space-around"}
    >
      <Link to={"/cart"}>
        <BiCart size={50} color="#fff" />
      </Link>
      <span className="cartQuantity">{totalQuantity}</span>
    </Box>
  );
};

export default CartWidget;
