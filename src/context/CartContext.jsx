import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [alert, setAlert] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalQuantity(cart);
    getTotal();
  }, [cart]);

  const addItem = (productToAdd, quantity) => {
    const productIndex = cart.findIndex(
      (item) => item.productToAdd.id === productToAdd.id
    );

    if (productIndex === -1) {
      setCart((prevCart) => [...prevCart, { productToAdd, quantity }]);
    } else {
      setCart((prevCart) =>
        prevCart.map((item, index) =>
          index === productIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    }
  };

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.productToAdd.id !== id);
    setCart(newCart);
    setAlert("Producto eliminado del carrito"); // Establecer el mensaje de alerta
    setTimeout(() => setAlert(null), 3000); // Ocultar alerta después de 3 segundos
  };

  const updateTotalQuantity = (cart) => {
    const actualQuantity = cart.reduce(
      (acc, valorActual) => acc + valorActual.quantity,
      0
    );
    setTotalQuantity(actualQuantity);
  };

  const getTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.productToAdd.precio * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const removeAllItems = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        addItem,
        totalQuantity,
        deleteItem,
        alert,
        totalPrice,
        removeAllItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};
