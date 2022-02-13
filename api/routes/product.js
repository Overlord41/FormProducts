const { Router } = require("express");
// const { rutaPaises, rutaIdPais, rutaPrueba } = require('../controllers/rutaPaises');

const router = Router();

router.get("/add", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
