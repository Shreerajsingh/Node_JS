const express = require('express');
const bodyParser = require('body-parser');

// When we call the function express we create a new express server obj

const app = express(); // http server obj

const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

// Express Middleware
function m1(req , res, next) {
    console.log('Inside middleware m1');
    next();
}

function m2(req, res, next) {
    console.log('Inside middleware m2');

    console.log(`req.user inside m2 ${req.user}`);

    req.user = {id: 1, email: 'a@b.com'};
    next();
}

function m3(req, res, next) {
    console.log('Inside middleware m3');

    console.log('req.user inside m3', req.user);

    next();
}


// How can the client send custom data to the server
/**
 * 1. URL Params --> /producct/7
 * 2. Query Params --> ?key1=value1&key2=value2&key3=value3
 * 3. Request Body
 */

app.get('/product/:id/rating/:rate', (req, res) => {
    console.log("Params ", req.params);
    const pid = req.params.id;
    const rate = req.params.rate;
    return res.json({Product: pid, Rating: rate, Email: req.email});
})

app.get('/home', m1, m2, m3, (req, res) => {
    // Everytime someone calls the /home route, this callback will be called
    console.log("'/home' called");

    console.log(req.url, req.query); // Printing query passed with url
    
    return res.json({msg: 'ok'}); // JS obj
})

app.post('/data', (req, res) => {
    console.log(req.body);
    return res.json({msg: 'ok'});
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});

 