import { useState } from "react";
import "./FormProduct.css";

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
    setData({ ...data, Etiqueta: [...data.Etiqueta, nameEtiqueta] });
    document.getElementById("IdEtiqueta").value = "";
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
      axios({
        method: "post",
        url: `${import.meta.env.VITE_URL_BASE}/products/add`,
        data: data,
      }).then((resp) => {
        console.log(resp.data);
      });
      setData(defaultState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={sendData}>
      <label>Nombre: </label>
      <input type="text" name="Nombre" onChange={changeNombre} />
      <br />
      <br />
      <div className="Cont_Etiquetas">
        <label>Etiquetas: </label>
        <input
          type="text"
          id="IdEtiqueta"
          name="Etiquetas"
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
          <div>
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
  );
};
