const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admins");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404Page.html"));
});

app.listen(3000);
