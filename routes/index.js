var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        baseUrl: process.env.base_url
    });
});

module.exports = router;
