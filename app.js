const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars").create;
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const { router: adminRoutes, products } = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootPath = require("./utils/path");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    // layoutsDir: path.join(rootPath, "layouts"),
    // partialsDir: path.join(rootPath, "partials"),
    defaultLayout: false,
    extname: "hbs",
  }).engine
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
