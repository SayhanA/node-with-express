const router = require("express").Router();

router.get("/add-product", (req, res, next) => {
  res.send(`
          <html>
              <head><title>Add Product From</title></head>
              <body>
                  <form action="/admin/add-product" method="POST">
                      <input type="text" name="title" placeholder="Product name" />
                      <button type="submit">Add Product</button>
                  </form>
              </body>
          </html>
      `);
});

router.post("/add-product", (req, res, next) => {
  console.log({ ...req.body });
  res.redirect("/shop");
});

module.exports = router;
