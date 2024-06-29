import React, { Fragment, useContext } from "react";
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
    <div>
      {carrito.map((prod) => (
        <Fragment key={prod.id}>
          <h1>
            {prod.nombre}: ${prod.precio} x {prod.cantidad}
          </h1>
          <button onClick={() => incrementarProducto(prod)}>➕</button>
          <button onClick={() => decrementarProducto(prod)}>➖</button>
          <button onClick={() => eliminarProducto(prod)}>❌</button>
        </Fragment>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to="/finalizar-compra">Finalizar compra</Link>
        </>
      ) : (
        <h2>Su carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;
