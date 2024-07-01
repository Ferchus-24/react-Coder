import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartWidget } from "./common/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <nav
      id="nav-sorti"
      className="navbar navbar-expand-lg navbar-light container-fluid"
    >
      <NavLink
        exact="true"
        to="/"
        activeclassname="active"
        className="nav-link"
      >
        <h1>Sortis</h1>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <NavLink
                to={`/category/${category.id}`}
                activeclassname="active"
                className="nav-link"
              >
                {category.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
