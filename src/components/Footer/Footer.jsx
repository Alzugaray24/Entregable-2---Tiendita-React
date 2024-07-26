import React from "react";
import {
  Flex,
  Text,
  Stack,
  Link,
  useBreakpointValue,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const displayStackDirection = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <Flex
      as="footer"
      p="4"
      bg="#143346"
      color="white"
      direction={displayStackDirection}
      align="center"
      justify="space-between"
      wrap="wrap"
      textAlign={{ base: "center", md: "left" }}
    >
      <Stack spacing={4} mb={{ base: "4", md: "0" }}>
        <Text fontSize="lg" fontWeight="bold">
          Nombre de la Empresa
        </Text>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los
          derechos reservados.
        </Text>
      </Stack>

      <Stack spacing={4} mb={{ base: "4", md: "0" }}>
        <Text fontSize="sm" fontWeight="bold">
          Enlaces
        </Text>
        <Stack spacing={2}>
          <Link color="teal.300" href="/about">
            Sobre Nosotros
          </Link>
          <Link color="teal.300" href="/contact">
            Contacto
          </Link>
          <Link color="teal.300" href="/privacy">
            Política de Privacidad
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={4} mb={{ base: "4", md: "0" }}>
        <Text fontSize="sm" fontWeight="bold">
          Síguenos
        </Text>
        <Stack direction="row" spacing={4}>
          <IconButton
            as="a"
            href="https://facebook.com"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            colorScheme="teal"
            variant="outline"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="teal"
            variant="outline"
          />
          <IconButton
            as="a"
            href="https://instagram.com"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="teal"
            variant="outline"
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Footer;
