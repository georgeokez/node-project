const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admins');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send('<h2>404 - Page Not Found.</h2>');
});

app.listen(3000);