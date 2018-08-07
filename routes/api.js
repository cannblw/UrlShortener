var express = require('express');
var router = express.Router();

router.get('/shorten', (req, res) => {
    console.log(req.params);
    const urlId = 'testUrlId';




    res.send({
        status: 'success',
        data: {
            urlId: urlId
        }
    })
    //const url = req.
    //res.send(url);
});

module.exports = router;
