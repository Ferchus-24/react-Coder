import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartWidget } from "./common/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

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
    <nav id="nav-sorti" className="navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink exact="true" to="/" className="navbar-brand">
          <h1>Sortis</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
