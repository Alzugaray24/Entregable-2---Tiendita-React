import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Stack,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/Shop/shopService";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../features/Auth/AuthSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const { data: category } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Estado para la alerta
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Oculta la alerta después de 3 segundos

      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta antes de que se oculta la alerta
    }
  }, [showAlert]);

  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  const displayButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  const displayStackDirection = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const handleLogout = () => {
    dispatch(setLogout());
    setShowAlert(true); // Muestra la alerta
    onClose();
    navigate("/login");
  };

  return (
    <>
      <Flex
        as="nav"
        p="4"
        bg="#143346"
        color="white"
        align="center"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="space-between"
      >
        <Flex
          direction={displayStackDirection}
          alignItems="center"
          justifyContent="space-between"
          mb={{ base: "4", md: "0" }}
          w={{ base: "100%", md: "auto" }}
          ml="20px"
        >
          <Link to="/">
            <img src={logo} width="100px" alt="Logo" />
          </Link>
          {user ? (
            <Text fontSize="md" ml={4}>
              Bienvenido {user}
            </Text>
          ) : null}
        </Flex>

        <Flex
          direction={displayStackDirection}
          alignItems="center"
          w={{ base: "100%", md: "auto" }}
          justifyContent={{ base: "center", md: "flex-end" }}
          mr="20px"
        >
          {user === undefined || user === null ? (
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link to="/login">
                <Button
                  variant="link"
                  colorScheme="teal"
                  size={displayButtonSize}
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="link"
                  colorScheme="teal"
                  size={displayButtonSize}
                >
                  Registrarse
                </Button>
              </Link>
            </Stack>
          ) : (
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                colorScheme="teal"
                variant="outline"
                size={displayButtonSize}
                onClick={onOpen} // Abre el modal al hacer clic
              >
                Cerrar Sesión
              </Button>
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  rightIcon={<BsChevronDown />}
                  colorScheme="teal"
                  variant="outline"
                  size={displayButtonSize}
                >
                  Categorías
                </MenuButton>
                <MenuList>
                  {categories.map((cat) => (
                    <MenuItem
                      color="black"
                      key={cat}
                      onClick={() => navigateToCategory(cat)}
                    >
                      {cat}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <CartWidget />
            </Stack>
          )}
        </Flex>
      </Flex>

      {/* Modal de confirmación */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación de Cierre de Sesión</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro de que deseas cerrar sesión?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogout}>
              Confirmar
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Alerta de cierre de sesión */}
      {showAlert && (
        <Alert status="success" variant="subtle" mt={4} mb={4}>
          <AlertIcon />
          Has cerrado sesión con éxito.
        </Alert>
      )}
    </>
  );
};

export default NavBar;
