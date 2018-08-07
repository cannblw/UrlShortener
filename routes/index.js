var express = require('express');
var router = express.Router();

var knex = require('../knex');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        baseUrl: process.env.base_url,
        csrfToken: req.csrfToken()
    });
});

router.get('/:urlID', (req, res) => {
    const urlID = req.params.urlID;

    // Get corresponding URL from DB
    knex('urls').select('url').where('url_id', urlID).first().then(data => {
        if(data && data != null) {
            return res.redirect(data.url);
        }

        res.status(404).send('Not found');
    });

});

module.exports = router;
