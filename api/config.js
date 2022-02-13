//validar si está en producción
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
  USER: process.env.USER || "root",
  DIALECT: process.env.DIALECT || "mysql",
  PASSWORD: process.env.PASSWORD || "",
  DATABASE: process.env.DATABASE || "formProducts",
};
