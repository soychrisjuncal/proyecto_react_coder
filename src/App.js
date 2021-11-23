import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                bienvenida="BIENVENIDOS A KIWI"
                botonRedes="Visita Nuestras Redes"
              />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer
                bienvenida="BIENVENIDOS A KIWI"
                botonRedes="Visita Nuestras Redes"
              />
            }
          />
          <Route
            path="/itemDetail/:idItem"
            element={<ItemDetailContainer detalle="BIENVENIDOS A KIWI" />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
