import { useState } from "react";
import "./styles/FormProduct.css";
import axios from "axios";

export const FormProduct = () => {
  const defaultState = {
    Nombre: "",
    NombreEtiqueta: "",
    Etiqueta: [],
  };

  const [data, setData] = useState(defaultState);

  const changeNombre = (e) => {
    setData({ ...data, Nombre: e.target.value });
  };

  const changeEtiqueta = (e) => {
    setData({ ...data, NombreEtiqueta: e.target.value });
  };

  const addEtiqueta = () => {
    let nameEtiqueta = data.NombreEtiqueta;
    if (nameEtiqueta !== "") {
      setData({
        ...data,
        Etiqueta: [...data.Etiqueta, nameEtiqueta],
        NombreEtiqueta: "",
      });
    }
  };

  const dropEtiqueta = (index) => {
    data.Etiqueta.splice(index, 1);
    setData({
      ...data,
      Etiqueta: data.Etiqueta,
    });
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
          Nombre: data.Nombre,
          Etiqueta: data.Etiqueta,
        },
      }).then((resp) => {
        console.log(resp.data);
        setData(defaultState);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="backgroundApp">
      <div className="containerForm">
        <p>Producto</p>
        <br />
        <form onSubmit={sendData}>
          <label>Nombre: </label>
          <input
            type="text"
            name="Nombre"
            onChange={changeNombre}
            value={data.Nombre}
          />
          <br />
          <br />
          <div className="Cont_Etiquetas">
            <label>Etiquetas: </label>
            <input
              type="text"
              id="IdEtiqueta"
              name="Etiquetas"
              value={data.NombreEtiqueta}
              onChange={changeEtiqueta}
            />
            <input
              id="Id_agregar"
              type="button"
              value="Agregar"
              onClick={addEtiqueta}
            />
            <br />
            <br />
            {data.Etiqueta.length > 0 && (
              <div className="DivEtiquetas">
                {data.Etiqueta.map((el, index) => (
                  <p key={index}>
                    {el}
                    <input
                      type="button"
                      value="X"
                      onClick={() => dropEtiqueta(index)}
                    />
                  </p>
                ))}
              </div>
            )}
          </div>
          <input type="submit" id="btnSubmit" value="Guardar" />
        </form>
      </div>
    </div>
  );
};
