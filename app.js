const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(`<h1 style="text-align: center">API not found</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
