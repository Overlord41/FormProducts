import React from "react";
import "./styles/CardProduct.css";

export const CardProduct = ({ props }) => {
  return (
    <div className="CardProducto">
      <div className="btnEliminar">X</div>
      <div className="container_img">
        <img
          src="https://archive.ebrschools.org/wp-content/themes/ebr/img/nofound.png"
          alt={props.Nombre}
        />
      </div>

      <br />
      <p>{props.Nombre}</p>
    </div>
  );
};
