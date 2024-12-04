const path = require("path");
const router = require("express").Router();

router.get("/add-product", (req, res, next) => {
  console.log(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log({ ...req.body });
  res.redirect("/shop");
});

module.exports = router;
