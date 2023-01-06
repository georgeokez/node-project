const express = require("express");
const path = require("path");

const homePage = require("./routes/home");
const usersPage = require("./routes/users");
const rootDir = require("./utils/rootDir");

const app = express();

// enables express point to the public files
app.use(express.static(path.join(rootDir, "public")));

// Adds routes middleware to app
app.use(homePage);
app.use(usersPage);

app.listen(3000);
