var express = require('express');
var request = require('request')
var router = express.Router();

router.all('*', function(req, res, next) {
  request(req.originalUrl.substr(1)).pipe(res)
})
module.exports = router;
