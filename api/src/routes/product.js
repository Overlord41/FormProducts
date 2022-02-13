const { Router } = require("express");
const { getAlltProducts, postProduct } = require("../controllers/product");

const router = Router();

router.get("/", getAlltProducts);
router.post("/add", postProduct);

module.exports = router;
