var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/:urlID', indexController.resolveUrlByUrlID);

module.exports = router;
