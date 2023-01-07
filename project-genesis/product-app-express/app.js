const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admins");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(adminRoutes.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  //res.status(404).sendFile(path.join(rootDir, "views", "404Page.html"));
  res.status(404).render("404Page");
});

app.listen(3000);
