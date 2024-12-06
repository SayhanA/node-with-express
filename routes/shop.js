const path = require("path");
const rootdir = require("../utils/path");
const { products } = require("./admin");
const routes = require("express").Router();

routes.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootdir, "views", "shop.html"));
  console.log(products);
  res.render("shop", {
    props: products,
    docTitle: "Shop",
    path: "/shop",
    isProducts: products.length === 0 ? false : true,
  });
});

module.exports = routes;
