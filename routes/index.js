var express = require('express');
var router = express.Router();
const path = require('path');

router.use("/static", express.static(path.join(__dirname, "public")));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
