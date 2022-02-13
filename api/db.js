const CreateConn = () => {
  let mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "galahad",
    database: "form_products",
  });
  return connection;
};

module.exports = {
  CreateConn,
};
