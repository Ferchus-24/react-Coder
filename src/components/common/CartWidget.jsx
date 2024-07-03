import React, { useContext } from "react";
import { CartCheck } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="btn btn-outline-dark" to="/carrito">
      <CartCheck className="me-2" /> {calcularCantidad()}
    </Link>
  );
};
