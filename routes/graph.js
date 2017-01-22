var express = require('express');
var router = express.Router();

router.get('/cities', function (req, res, next) {

  var cityData = [
    {
      'cityName': 'Debrecen',
      'population': 237888,
      'income': 135430
    },
    {
      'cityName': 'Miskolc',
      'population': 216470,
      'income': 151102
    },
    {
      'cityName': 'Szeged',
      'population': 201307,
      'income': 141233
    },
    {
      'cityName': 'Pecs',
      'population': 179215,
      'income': 138830
    }
  ];

  res.json(cityData);
});

module.exports = router;
