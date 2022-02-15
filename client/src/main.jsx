import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FormProduct } from "./components/FormProduct";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <nav>
        <Link to="/">Productos</Link>
        <Link to="/agregar">Agregar Producto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/agregar" element={<FormProduct />} />
      </Routes>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
