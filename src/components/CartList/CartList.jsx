import React, { useContext } from "react";
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

function CartList() {
  const { cart, deleteItem, alert, totalPrice } = useContext(CartContext);

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <Box>
      {alert && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          {alert}
        </Alert>
      )}
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th isNumeric>Precio</Th>
              <Th isNumeric>Cantidad</Th>
              <Th isNumeric>Subtotal</Th>
              <Th>Acción</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <Tr key={item.productToAdd.id}>
                  <Td>{item.productToAdd.nombre}</Td>
                  <Td isNumeric>${item.productToAdd.precio.toFixed(2)}</Td>
                  <Td isNumeric>{item.quantity}</Td>
                  <Td isNumeric>
                    ${(item.productToAdd.precio * item.quantity).toFixed(2)}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      onClick={() => handleDelete(item.productToAdd.id)}
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
              <Th isNumeric>Precio Final: {totalPrice}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CartList;
