const express = require('express');
const homePingController = require('../controllers/home.controller');

const router = express.Router();

router.get('/custom1', homePingController);

router.get('/custom2', homePingController);

module.exports = router;