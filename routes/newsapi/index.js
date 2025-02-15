const express = require("express");
const router = express.Router();
const config  = require("../../config")

/* This is a post request to the news api. */
router.post('/everything', function (req, res, next) {
    const https = require("https");
    const options = {
        headers: {"User-Agent": "Digits3 News API"}
    }
    https.request(`https://newsapi.org/v2/everything?q=${req.body.query}&sortBy=publishedAt&apiKey=${config.newsApi}&language=en`, options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        })
        response.on('end', () => {
            res.json(JSON.parse(data))
        })
    })
    .on('error', (error) => {
        console.log('An error', error);
    })
    .end()
});

module.exports = router;