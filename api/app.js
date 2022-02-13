const express = require("express");
const routerProduct = require("./src/routes/product");
const cors = require("cors");
const app = express();

//Middelwares
app.use(express.json());
app.use(cors());

//Creando ruta para products
app.use("/products", routerProduct);

module.exports = app;
