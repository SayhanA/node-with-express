const path = require("path");
const rootdir = require("../utils/path");
const routes = require("express").Router();

routes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "shop.html"));
});

module.exports = routes;
