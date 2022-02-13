const { Producto, Etiquetas } = require("../db");

const getAlltProducts = async (req, res) => {
  const findAllProducts = await Producto.findAll({
    include: {
      model: Etiquetas,
      attributes: ["Id_etiqueta", "Nombre"],
    },
  });
  res.json(findAllProducts);
};

const postProduct = async (req, res) => {
  const addProduct = req.body;
  try {
    const [newProduct, validat] = await Producto.findOrCreate({
      where: {
        Nombre: addProduct.Nombre,
      },
    });
    if (validat && addProduct.Etiqueta.length != 0) {
      addProduct.Etiqueta.forEach((elem) => {
        Etiquetas.create({
          Id_producto: newProduct.dataValues.Id_producto,
          Nombre: elem.Nombre,
        });
      });
    }
    res.send("Product created successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlltProducts,
  postProduct,
};
