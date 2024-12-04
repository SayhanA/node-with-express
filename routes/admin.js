const path = require("path");
const rootdir = require("../utils/path");
const router = require("express").Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log({ ...req.body });
  res.redirect("/shop");
});

module.exports = router;
