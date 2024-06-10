import React from "react";
import { NavLink } from "react-router-dom";
import categories from "../../data/categorias.json";
import { CartWidget } from "./common/CartWidget";

export const Navbar = () => {
  return (
    <nav className="header">
      <h1>Indumentaria Charlys</h1>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" activeclassname="active" className="nav-link">
            Inicio
          </NavLink>
        </li>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <NavLink
                className="nav-link"
                to={`/category/${category.id}`}
                activeclassname="active"
              >
                {category.nombre}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <CartWidget />
    </nav>
  );
};
