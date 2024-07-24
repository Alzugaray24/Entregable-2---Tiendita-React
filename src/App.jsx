// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CartList from "./components/CartList/CartList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Tienda" />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer title="Categoría" />}
        />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartList title="Cart" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
