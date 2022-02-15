import React, { useEffect, useState } from "react";
import "./styles/Products.css";
import axios from "axios";
import { CardProduct } from "./CardProduct";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const allProducts = await axios.get(
      `${import.meta.env.VITE_URL_BASE || "http://localhost:3001"}/products`
    );
    setProducts(allProducts.data);
  };

  return (
    <div className="backgroundApp">
      <div className="contain_Products">
        {products.length > 0 ? (
          products.map((el) => <CardProduct key={el.Id_producto} props={el} />)
        ) : (
          <div>Products not found</div>
        )}
      </div>
    </div>
  );
};
