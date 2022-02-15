import "./App.css";
import { FormProduct } from "./components/FormProduct";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Productos</Link>
        <Link to="/agregar">Agregar Producto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/agregar" element={<FormProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
