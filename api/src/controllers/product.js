const { Producto, Etiquetas } = require("../db");

const getAlltProducts = async (req, res) => {
  try {
    const findAllProducts = await Producto.findAll({
      include: {
        model: Etiquetas,
        attributes: ["Id_etiqueta", "Nombre"],
      },
    });
    res.json(findAllProducts);
  } catch (error) {
    console.log(error);
  }
};

const postProduct = async (req, res) => {
  const addProduct = req.body;
  try {
    const [newProduct, validat] = await Producto.findOrCreate({
      where: {
        Nombre: addProduct.Nombre,
      },
    });

    if (validat) {
      if (addProduct.Etiqueta.length != 0) {
        addProduct.Etiqueta.forEach((elem) => {
          Etiquetas.create({
            Id_producto: newProduct.dataValues.Id_producto,
            Nombre: elem,
          });
        });
      }
      res.send("Product created successfully");
    } else {
      res.send("The product is already exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const Id_Product = req.params.id;
  try {
    const findProductById = await Producto.findByPk(Id_Product);

    if (findProductById) {
      await findProductById.destroy();
      res.send("Product delete succefully");
    } else {
      res.send("Product not found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlltProducts,
  postProduct,
  deleteProduct,
};
