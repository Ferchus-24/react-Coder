import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const {
    carrito,
    calcularTotal,
    vaciarCarrito,
    eliminarProducto,
    incrementarProducto,
    decrementarProducto,
  } = useContext(CartContext);

  return (
    <div className="container-fluid mt-3">
      <h1>Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h2>
            {prod.nombre}: ${prod.precio} x {prod.cantidad}
          </h2>
          <button
            id="botones"
            className="btn btn-md mb-2"
            onClick={() => incrementarProducto(prod)}
          >
            +
          </button>
          <button
            id="botones"
            className="btn btn-md mb-2"
            onClick={() => decrementarProducto(prod)}
          >
            -
          </button>
          <button
            id="botones"
            className="btn btn-md mb-2"
            onClick={() => eliminarProducto(prod)}
          >
            X
          </button>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button id="botones" className="btn btn-sm" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <Link id="botones" className="btn btn-sm" to="/finalizar-compra">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>Su carrito está vacío 😢 </h2>
      )}
    </div>
  );
};

export default Carrito;
