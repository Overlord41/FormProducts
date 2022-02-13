const { DATABASE, USER, HOST, PASSWORD, DIALECT } = require("../config");
const { Sequelize } = require("sequelize");

//Traemos los modelos de tablas
const modelProduct = require("./models/Producto");
const modelEtiqueta = require("./models/Etiqueta");

//creando conexión con la DB
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  logging: false,
});

// Injectamos la conexion (sequelize) a todos los modelos
modelProduct(sequelize);
modelEtiqueta(sequelize);

//Traemos los modelos
const { Producto, Etiquetas } = sequelize.models;

//hacemos las relaciones
Producto.hasMany(Etiquetas, { foreignKey: "Id_producto" });
Etiquetas.belongsTo(Producto, { foreignKey: "Id_producto" });

//Testing autentication DB connection
const dbTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  ...sequelize.models,
  conn: sequelize,
  dbTest,
};
