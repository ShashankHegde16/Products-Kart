const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const path = require('path')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});








app.listen(3000);