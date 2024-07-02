import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen}
            className="img-fluid"
            alt={producto.nombre}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{producto.nombre}</h1>
          <p className="lead">{producto.descripcion}</p>
          <p className="h4">${producto.precio}</p>
          <button
            id="botones"
            className="btn btn-lg mt-3"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
