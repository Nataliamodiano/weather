var express = require('express');
var router = express.Router();

var weatherController = require('../controllers/weather-controller');
var middleware = require('../middleware/custom');

router.get('/', middleware.lowerCase, weatherController.getWeather);

module.exports = router;