var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const info = {
    owner: 'Sebastian Negron',
    location: 'Caguas, Puerto Rico',
    email: 'vgspr@gmail.com',
    phonenumber: 787-000-0000,
    empleados:['Juan', 'Pedro', 'Elvin'],
  }
  res.render('about', info);
});

module.exports = router;
