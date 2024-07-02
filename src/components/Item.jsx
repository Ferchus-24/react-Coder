import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-text">${producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
        <Link
          id="botones"
          className="textos btn btn-sm"
          to={`/item/${producto.id}`}
        >
          Ver más
        </Link>
        <button
          id="botones"
          className="btn btn-secondary btn-sm"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
