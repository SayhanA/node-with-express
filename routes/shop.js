const routes = require("express").Router();

routes.get("/", (req, res, next) => {
  res.send("<h2>Hello Expressjs middleware</h2>");
});

module.exports = routes;
