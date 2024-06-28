import "./css/main.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Carrito from "../src/components/common/Carrito";
import { CartProvider } from "../context/CartContext";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizar-compra" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
