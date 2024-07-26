import React, { useContext, useState } from "react";
import { Context as CartContext } from "../../context/CartContext";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../features/Cart/CartSlice";
import { Link } from "react-router-dom";
import NotLogged from "../ErrorPages/notLogged/NotLogged";
import { useNavigate } from "react-router-dom";
import LoaderContainer from "../LoaderContainer/LoaderContainer";

function CartList() {
  const cart = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/checkout");
    }, 2000);
  };

  return (
    <>
      {user === null || user === undefined ? (
        <NotLogged />
      ) : (
        <Box>
          <TableContainer>
            <Table variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th isNumeric>Precio</Th>
                  <Th isNumeric>Cantidad</Th>
                  <Th isNumeric>Subtotal</Th>
                  {/* <Th>ppepe</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {cart && cart.length > 0 ? (
                  cart.map((item) => (
                    <Tr key={item.product.id}>
                      <Td>{item.product.title}</Td>
                      <Td isNumeric>${item.product.price.toFixed(2)}</Td>
                      <Td isNumeric>{item.quantity}</Td>
                      <Td isNumeric>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(item.product.id)}
                          colorScheme="red"
                        >
                          Eliminar Producto
                        </Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan="5" textAlign="center">
                      No hay productos en el carrito
                    </Td>
                  </Tr>
                )}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th isNumeric>Precio Final: {total}</Th>
                  <Th>
                    <Button
                      as={Link}
                      onClick={() => handleCheckout()}
                      colorScheme="teal"
                      size="sm"
                    >
                      Confirmar compra
                    </Button>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          {isLoading ? <LoaderContainer isLoading={isLoading} /> : null}
        </Box>
      )}
    </>
  );
}

export default CartList;
