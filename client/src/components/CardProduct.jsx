import React, { useState } from "react";
import "./styles/CardProduct.css";
import axios from "axios";
import { GET_ALL_PRODUCTS } from "../redux/reducers/productsReducer";
import { useSelector, useDispatch } from "react-redux";

export const CardProduct = ({ props, index }) => {
  const allProducts = useSelector((state) => state.product.Productos);
  const [viewEtiquetas, setViewEtiquetas] = useState(false);

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
      <div className="container_delete">
        <div
          className="btnEliminar"
          onClick={() => delete_product(props.Id_producto, index)}
        >
          Delete
        </div>
      </div>
      <div className="container_img">
        <img
          src="https://img01.huaweifile.com/sg/ms/pe/pms/product/6941487206971/group/800_800_760517B152C1AC4A858D8A793CA3ABA7D60E3493B32B1A5A.png"
          alt={props.Nombre}
        />
      </div>
      <p>{props.Nombre}</p>
      <div
        className="btnDetails"
        onClick={() => setViewEtiquetas(!viewEtiquetas)}
      >
        Details
      </div>
      {viewEtiquetas && (
        <ul>
          {props.Etiquetas.map((el) => (
            <li>{el.Nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
