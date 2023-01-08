const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const admins = require("./admins");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views','shop.html'));
  const products = admins.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
