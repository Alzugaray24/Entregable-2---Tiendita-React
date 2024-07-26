import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotLogged = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="50vh"
      p={4}
    >
      <Box textAlign="center">
        <Heading size="2xl" mb={4} color="teal.500">
          Acceso Restringido
        </Heading>
        <Text fontSize="lg" mb={6}>
          No tienes acceso a esta página. Por favor, inicia sesión para
          continuar.
        </Text>
        <Link to="/login">
          <Button colorScheme="teal" size="lg">
            Iniciar Sesión
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NotLogged;
