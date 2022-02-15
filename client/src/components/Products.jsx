import "./styles/Products.css";
import axios from "axios";
import { useEffect } from "react";
import { CardProduct } from "./CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS } from "../redux/reducers/productsReducer";

export const Products = () => {
  const Productos = useSelector((state) => state.product.Productos);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const allProducts = await axios.get(
      `${import.meta.env.VITE_URL_BASE || "http://localhost:3001"}/products`
    );
    dispatch(GET_ALL_PRODUCTS(allProducts.data));
  };

  return (
    <div className="backgroundApp">
      <div className="contain_Products">
        {Productos.length > 0 ? (
          Productos.map((el, index) => (
            <CardProduct key={el.Id_producto} props={el} index={index} />
          ))
        ) : (
          <div>Products not found</div>
        )}
      </div>
    </div>
  );
};
