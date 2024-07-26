// index.jsx
import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Puedes mantener BrowserRouter aquí si lo prefieres
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  </Provider>,
  rootElement
);
