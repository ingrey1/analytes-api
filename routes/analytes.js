var express = require('express');
var router = express.Router();

/* GET analytes listing. */
router.get('/', function(req, res, next) {
  res.json({analytes: [{name: 'analyte1'}]});
});

module.exports = router;
