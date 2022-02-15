import React from "react";
import "./styles/CardProduct.css";
import axios from "axios";
import { GET_ALL_PRODUCTS } from "../redux/reducers/productsReducer";
import { useSelector, useDispatch } from "react-redux";

export const CardProduct = ({ props, index }) => {
  const allProducts = useSelector((state) => state.product.Productos);

  const dispatch = useDispatch();

  const delete_product = async (id, index) => {
    const resProduct = await axios.delete(
      `${
        import.meta.env.VITE_URL_BASE || "http://localhost:3001"
      }/products/delete/${id}`
    );
    if (resProduct.data === "Product delete succefully") {
      const newAllProducts = [...allProducts];
      newAllProducts.splice(index, 1);
      dispatch(GET_ALL_PRODUCTS(newAllProducts));
    }
  };

  return (
    <div className="CardProducto">
      <div
        className="btnEliminar"
        onClick={() => delete_product(props.Id_producto, index)}
      >
        X
      </div>
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
