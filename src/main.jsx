// index.jsx
import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'; // Puedes mantener BrowserRouter aquí si lo prefieres
import App from './App';

const rootElement = document.getElementById('root');

render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  rootElement
);
