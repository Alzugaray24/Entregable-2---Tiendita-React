import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/ErrorPages/PageNotFound/PageNotFound";
import CartList from "./components/Cart/CartList";
import CheckoutList from "./components/Checkout/CheckoutList";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavBar />
      <Box as="main" flex="1">
        <Routes>
          <Route path="/" element={<ItemListContainer title="Tienda" />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer title="Categoría" />}
          />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartList title="Cart" />} />
          <Route path="/checkout" element={<CheckoutList title="Checkout" />} />
          <Route path="/login" element={<Login title="Login" />} />
          <Route path="/signup" element={<SignUp title="SignUp" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
