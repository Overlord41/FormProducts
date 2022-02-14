const { Router } = require("express");
const {
  getAlltProducts,
  postProduct,
  deleteProduct,
} = require("../controllers/product");

const router = Router();

router.get("/", getAlltProducts);
router.post("/add", postProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
