"use strict";

const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/home/home');
const accountRoutes = require('./routes/account/account');
const accountAPIRoutes = require('./routes/api/account');
const exp = require('constants');
const bodyParser = require('body-parser')
const urlencoded = bodyParser.urlencoded({extended: false})


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('', homeRoutes);

app.use('/account', accountRoutes);

app.use('/api/account', accountAPIRoutes);

app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});