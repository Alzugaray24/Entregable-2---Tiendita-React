// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer title='Tienda' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer title='Categoría' />} />
        <Route path='/product/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<h2>Carrito</h2>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
