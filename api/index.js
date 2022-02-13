// Obteniendo valores de otras rutas
const { PORT } = require("./config");
const { conn, dbTest } = require("./src/db");

const app = require("./app");
//Levantando Servidor
conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    //Revisando la conexión con la db
    // dbTest();
  });
});
