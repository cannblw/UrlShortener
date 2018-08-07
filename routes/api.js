var express = require('express');
var router = express.Router();

var apiController = require('../controllers/apiController');

router.post('/shorten', apiController.shorten);

module.exports = router;
