var knex = require('../knex');

exports.index = (req, res) => {
    res.render('index', {
        baseUrl: process.env.base_url,
        csrfToken: req.csrfToken()
    });
}

exports.resolveUrlByUrlID = (req, res) => {
    const urlID = req.params.urlID;

    // Get corresponding URL from DB
    knex('urls').select('url').where('url_id', urlID).first().then(data => {
        if(data && data != null) {
            return res.redirect(data.url);
        }

        return res.status(404).send({
            status: 'error',
            message: 'URL not found.'
        });
    });
}
