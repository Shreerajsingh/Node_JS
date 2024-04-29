const express = require('express');
const router = require('./routes'); // By default it will use index.js
const customRouter = require('./routes/customrouter')
const {PORT, EMAIL} = require('./config/server.config');

const app = express();

app.use('/api',router); // localhost:3001/api/home
app.use('/custom',customRouter); // localhost:3001/custom/custom1

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT} ${EMAIL}`);
}) 

/**
 * App.use registers the middleware at globle level
 * app.get regist a route and a corrosponding middware
 */