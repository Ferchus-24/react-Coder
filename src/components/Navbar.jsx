import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartWidget } from "./common/CartWidget";

export const Navbar = () => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef).then((res) => {
      setCategories(
        res.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    });
  }, []);

  return (
    <nav className="container-fluid nav">
      <h1>Sortis</h1>
      <ul className="nav-menu">
        <li className="nav-links">
          <NavLink to="/" activeclassname="active" className="nav-links">
            Inicio
          </NavLink>
        </li>
        {categories.map((category) => {
          return (
            <li className="nav-item" key={category.id}>
              <NavLink
                to={`/category/${category.id}`}
                activeclassname="active"
                className="nav-links"
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
