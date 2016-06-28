const express = require('express');
const router = express.Router();
const exchange = require('./lib/exchange');
router.get('/', (req, res) => {
    res.render('index', { rates: ['GBP', 'JPY', 'USD']});
});

module.exports = router;