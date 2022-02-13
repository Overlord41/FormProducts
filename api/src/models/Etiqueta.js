const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Etiquetas",
    {
      Id_etiqueta: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      Id_producto: {
        type: DataTypes.INTEGER(11),
      },
      Nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
