import "./css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Carrito from "../src/components/common/Carrito";
import { CartProvider } from "../context/CartContext";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
