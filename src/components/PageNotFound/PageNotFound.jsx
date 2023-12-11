import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h1" fontSize="2xl" color="red.500" mb={4}>
        ¡Oops! Página no encontrada
      </Heading>
      <Text fontSize="lg">
        Parece que te has perdido. La página que estás buscando no existe.
      </Text>
    </Box>
  );
};

export default PageNotFound;
