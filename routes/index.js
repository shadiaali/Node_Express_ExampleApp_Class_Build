var express = require('express');
var router = express.Router();

var cars = [
  {
    name: "Honda Civic",
    description: "The 'Civic' is low slung & looks like fun"
  },

  {
    name: "Ford Taurus",
    description: "The Taurus is reasonably priced"
  },

  {
    name: "Chevrolet Malibu",
    description: "Midsize car with a hint of sportiness"
  }

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'Home', cars: cars });
});

module.exports = router;
