const express = require('express');
const homePingController = require('../controllers/home.controller');

const router = express.Router();

router.get('/', homePingController);

router.get('/home', homePingController);

// router.get('/api/home', homePingController);

module.exports = router;