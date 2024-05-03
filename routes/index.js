var express = require('express');
var router = express.Router();

const {getWeather} = require('../controllers/requests')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', getWeather)



module.exports = router;
