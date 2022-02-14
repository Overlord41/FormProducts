import "./App.css";
import { FormProduct } from "./components/FormProduct";

function App() {
  return (
    <>
      <div id="backgroundApp">
        <div className="containerForm">
          <p>Producto</p>
          <br />
          <FormProduct />
        </div>
      </div>
    </>
  );
}

export default App;
