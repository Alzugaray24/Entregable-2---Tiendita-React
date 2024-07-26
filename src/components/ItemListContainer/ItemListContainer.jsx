import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../services/Shop/shopService";
import ItemList from "../ItemList/ItemList";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import { useSelector, useDispatch } from "react-redux";
import { setAlertFalse } from "../../features/Cart/CartSlice";

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const showAlert = useSelector((state) => state.cart.value.showAlert);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    data: allProducts,
    isLoading: isLoadingAllProducts,
    error: errorAllProducts,
  } = useGetProductsQuery();
  const {
    data: prodsByCategory,
    isLoading: isLoadingProdsByCategory,
    error: errorProdsByCategory,
  } = useGetProductsByCategoryQuery(categoryId);

  const isLoading = categoryId
    ? isLoadingProdsByCategory
    : isLoadingAllProducts;
  const error = categoryId ? errorProdsByCategory : errorAllProducts;

  useEffect(() => {
    if (categoryId) {
      if (prodsByCategory) {
        setData(prodsByCategory);
      }
    } else {
      if (allProducts) {
        setData(allProducts);
      }
    }
  }, [categoryId, prodsByCategory, allProducts]);

  useEffect(() => {
    if (showAlert) {
      onOpen();
    }
  }, [showAlert, onOpen]);

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  const handleClose = () => {
    dispatch(setAlertFalse());
    onClose();
  };

  return (
    <Flex direction="column" align="center" m={4}>
      <Box mb={4} w="full" maxW="1200px">
        <Heading size="lg" textAlign="center">
          {title} {categoryId && ` - ${categoryId}`}
        </Heading>
      </Box>
      {isLoading ? (
        <LoaderContainer isLoading={isLoading} />
      ) : (
        <Box w="full" maxW="1200px">
          <ItemList data={data} />
        </Box>
      )}

      {/* Modal for alert */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Acceso Restringido</ModalHeader>
          <ModalBody>
            Debes iniciar sesión para tener acceso al detalle.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ItemListContainer;
