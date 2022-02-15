import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ETIQUETA } from "../redux/reducers/productsReducer";

export const ContEtiquetas = () => {
  const AllEtiquetas = useSelector((state) => state.product.Etiqueta);

  const dispatch = useDispatch();

  const dropEtiqueta = (index) => {
    const newAllEtiquetas = [...AllEtiquetas];
    newAllEtiquetas.splice(index, 1);
    dispatch(REMOVE_ETIQUETA(newAllEtiquetas));
  };
  return AllEtiquetas.map((el, index) => (
    <div key={index}>
      {el}
      <input type="button" value="X" onClick={() => dropEtiqueta(index)} />
    </div>
  ));
};
