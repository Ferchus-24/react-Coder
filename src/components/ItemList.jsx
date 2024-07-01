import React from "react";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div
            key={producto.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <Item producto={producto} />
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};
