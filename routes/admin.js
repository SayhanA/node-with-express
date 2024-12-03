const router = require("express").Router();

router.use("/add-product", (req, res, next) => {
  res.send(`
          <html>
              <head><title>Add Product From</title></head>
              <body>
                  <form action="/product" method="POST">
                      <input type="text" name="title" placeholder="Product name" />
                      <button type="submit">Add Product</button>
                  </form>
              </body>
          </html>
      `);
});

router.post("/product", (req, res, next) => {
  console.log({ ...req.body });
  res.redirect("/");
});

module.exports = router;
