const express = require('express');

const app = express();

// midddleware 01
// app.use((req, res, next) => {
//     console.log('Middleware 01');
//     next();
// });

// // midddleware 02
// app.use((req, res, next) => {
//     console.log('Middleware 02');
//     res.send('<h1>Return page from Middleware 02</h1>');
// });


app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1><ul><li>User 1</li><li>User 2</li></ul>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);