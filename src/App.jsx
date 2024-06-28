import "./css/main.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./components/NotFound"
import { ItemListContainer } from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Carrito from "../src/components/common/Carrito";
import { CartProvider } from "../context/CartContext";
// import { Suma } from "./components/Suma";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";
import { CargarProductos } from "./components/CargarProductos";

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
          {/* <Route path="/suma" element={<Suma />} /> */}
          <Route path="/finalizar-compra" element={<Checkout />} />
          <Route path="/cargar-productos" element={<CargarProductos />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
