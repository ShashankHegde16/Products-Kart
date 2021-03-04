const express = require('express');
const path = require('path');
const router = express.Router();
const route = require('../util/path');

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(route, 'views', 'add-product.html'));
})

router.post('/product', (req, res) => {
    res.redirect('/');
})
module.exports = router;