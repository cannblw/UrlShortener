var knex = require('../knex');

exports.shorten = (req, res) => {
    let url = req.body.url;

    if (url == undefined) {
        return res.status(400).send({
            status: 'error',
            message: 'No URL provided.'
        })
    }

    // Trim URL
    url = url.trim()

    // Check url format
    const re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (!re.test(url)) {
        return res.status(400).send({
            status: 'error',
            message: 'The data sent is not an URL.'
        })
    }

    // Generate a random number and convert it to base 36. This will be our url ID
    const urlID = Math.random().toString(36).substr(2);

    // Insert data into database
    knex('urls').insert({
        url: url,
        url_id: urlID
    }).then(() => {
        return res.send({
            status: 'success',
            data: {
                urlID: urlID
            }
        })
    }).catch(e => {
        return res.status(500).send({
            status: 'error',
            message: 'Error generating shortened url.'
        })
    })
}
