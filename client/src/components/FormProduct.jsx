import React from "react";
import "./styles/FormProduct.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_NAME_PRODUCT,
  SET_NAME_ETIQUETA,
  ADD_ETIQUETAS,
  RESTORE_FORM_PRODUCT,
} from "../redux/reducers/productsReducer";
import { ContEtiquetas } from "./ContEtiquetas";

export const FormProduct = () => {
  const NameProducto = useSelector((state) => state.product.Nombre);
  const NameEtiqueta = useSelector((state) => state.product.NombreEtiqueta);
  const AllEtiquetas = useSelector((state) => state.product.Etiqueta);

  const dispatch = useDispatch();

  const change_name = (e) => {
    dispatch(SET_NAME_PRODUCT(e.target.value));
  };

  const change_name_etiqueta = (e) => {
    dispatch(SET_NAME_ETIQUETA(e.target.value));
  };

  const addEtiquetas = () => {
    if (NameEtiqueta !== "") {
      dispatch(ADD_ETIQUETAS(NameEtiqueta));
    }
    dispatch(SET_NAME_ETIQUETA(""));
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_URL_BASE || "http://localhost:3001"
        }/products/add`,
        data: {
          Nombre: NameProducto,
          Etiqueta: AllEtiquetas,
        },
      }).then((resp) => {
        console.log(resp.data);
        dispatch(RESTORE_FORM_PRODUCT());
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="backgroundApp">
      <h2>Producto</h2>
      <div className="containerForm">
        <form onSubmit={sendData}>
          <label>Nombre: </label>
          <input
            type="text"
            id="Id_inpNombre"
            name="Nombre"
            onChange={change_name}
            value={NameProducto}
          />
          <br />
          <br />
          <div className="Cont_Etiquetas">
            <label>Etiquetas: </label>
            <input
              type="text"
              id="IdEtiqueta"
              name="Etiquetas"
              value={NameEtiqueta}
              onChange={change_name_etiqueta}
            />
            <input
              id="Id_agregar"
              type="button"
              value="Agregar"
              onClick={addEtiquetas}
            />
            <br />
            <br />
            {AllEtiquetas.length > 0 && (
              <div className="DivEtiquetas">
                <ContEtiquetas />
              </div>
            )}
          </div>
          <input type="submit" id="btnSubmit" value="Guardar" />
        </form>
      </div>
    </div>
  );
};
