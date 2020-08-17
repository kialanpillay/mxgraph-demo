
const express = require('express');
const request = require('request');

const app = express();

app.use('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const url = 'https://en.wikipedia.org' + req.url;
    console.log(url);
    req.pipe(request({ qs: req.query , uri: url })).pipe(res);
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`listening on ${PORT}`));