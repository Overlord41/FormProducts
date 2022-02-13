const express = require("express");
const { CreateConn } = require("./db");
const router = require("./routes/product");
const app = express();
const port = 3000;

//Middelwares
app.use(express.json());

//Creando ruta para products
app.use("/products", router);

//MySQL connection
let connection = CreateConn();

//Levantando Servidor
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  //Revisando la conexión con la db
  connection.connect((error) => {
    if (error) throw error;
    console.log("Database connection successful");
  });
});
