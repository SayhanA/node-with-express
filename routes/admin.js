const path = require("path");
const rootdir = require("../utils/path");
const router = require("express").Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product");
  // res.sendFile(path.join(rootdir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/shop");
});

module.exports = { router, products };
